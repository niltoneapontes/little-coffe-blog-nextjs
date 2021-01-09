import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { client } from '../../prismic-configuration';
import { RichText } from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import Prismic from 'prismic-javascript';
import Container from '../../components/component/container'
import PostBody from '../../components/component/post-body'
import PostHeader from '../../components/component/post-header'
import Layout from '../../components/component/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/component/post-title'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'

import { useFetch } from '@/lib/fetcher'
import Intro from '@/components/component/intro'
import { MainContainer } from '@/components/styles/main-container'
import Author from '@/types/author';

type Props = {
  selectedPost: { 
    uid: string;
    data: {
      title: [{text: string}];
      excerpt: [{text: string}];
      coverimage: {url: string};
      date: string;
      body: [{
        text: string;
      }];
  }},
  author: {
    name: string;
    picture: string;
  }
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ selectedPost, author, morePosts, preview }: Props) => {
  const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  const { data } = useFetch(`/api/page-views?id=${selectedPost.uid}`)

  return (
    <Layout preview={preview}>
      <Container>
        <Intro />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <MainContainer className="mb-32">
              <PostHeader
                title={selectedPost.data.title[0].text}
                coverImage={selectedPost.data.coverimage.url}
                date={selectedPost.data.date}
                author={author}
                views={data?.total}
              />
              <PostBody content={selectedPost.data.body[0].text} />
            </MainContainer>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  // const post = getPostBySlug(params.slug, [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'content',
  //   'ogImage',
  //   'coverImage',
  // ])

  const selectedPost = await client().getByUID('post', params.slug, {})
  // const content = await markdownToHtml(post.content || '')

  console.log(selectedPost.data)

  const author = {
      name: selectedPost.data.authorname[0].text, 
      picture: selectedPost.data.authorimage.url
  }

  return {
    props: {
      selectedPost,
      author,
    },
  }
}

export async function getStaticPaths() {
  // const posts = getAllPosts(['slug'])
  const posts = await client().query([
    Prismic.Predicates.at('document.type', 'post')
  ])

  const paths = posts.results.map((post) => {
    return {
      params: {
        slug: post.uid,
      },
    }
  });

  return {
    paths,
    fallback: false,
  }
}

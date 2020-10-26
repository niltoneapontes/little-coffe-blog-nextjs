import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
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

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { data } = useFetch(`/api/page-views?id=${post.slug}`)

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
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                views={data?.total}
              />
              <PostBody content={post.content} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

import Container from '../components/component/container'
import MoreStories from '../components/component/more-stories'
import HeroPost from '../components/component/hero-post'
import Intro from '../components/component/intro'
import Layout from '../components/component/layout'
import { MainContainer } from '../components/styles/main-container'
import { getAllPosts } from '../lib/api'
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-dom';
import Head from 'next/head'
import Post from '../types/post'

import SimpleForm from '../components/component/chatbot'
import { client } from '@/prismic-configuration'

type Props = {
  posts: [{ 
    uid: string;
    data: {
      title: [{text: string}];
      excerpt: [{text: string}];
      coverimage: {url: string};
      date: string;
      body: [{
        text: string;
      }];
      authorname: [{text: string}],
      authorimage: {url: string}
  }}]
}

const Index = ({ posts }: Props) => {
  const heroPost = posts[0];
  const heroAuthor = {
    name: heroPost.data.authorname[0].text, 
    picture: heroPost.data.authorimage.url
  }
  const morePosts = posts.slice(1).map(post => {
    return {
      post: { 
        uid: post.uid,
        data: {
          title: RichText.asText(post.data.title),
          excerpt: RichText.asText(post.data.excerpt),
          coverimage: post.data.coverimage.url,
          date: post.data.date,
          body: RichText.asHtml(post.data.body),
      }},
      author: {
        name: post.data.authorname[0].text,
        picture: post.data.authorimage.url,
      }
    }
  })

  return (
    <>
      <Layout>
        <Head>
          <title>Little Coffee</title>
        </Head>
        <Container>
          <Intro />
          <MainContainer>
            {heroPost && (
              <HeroPost heroPost={heroPost} author={heroAuthor}/>
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </MainContainer>
        </Container>
        <SimpleForm />
      </Layout>
    </>
  )
}

export default Index



export async function getStaticProps() {
  const getPosts = await client().query([
    Prismic.Predicates.at('document.type', 'post')
  ])

  const posts = getPosts.results;

  return {
    props: {
      posts
    },
  }
}

export async function getStaticPaths() {
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


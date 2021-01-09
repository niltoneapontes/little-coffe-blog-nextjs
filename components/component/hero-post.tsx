import { useRouter } from 'next/router'
import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../../types/author'
import { useFetch } from '@/lib/fetcher'
import PostViews from './post-views'
import { RichText } from 'prismic-dom'

import { Container, ImageContainer, ImageMask, InfoContainer, TitleContainer } from '../styles/hero-post';

type Props = {
  heroPost: { 
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
}

const HeroPost = ({ heroPost, author }: Props) => {
  const router = useRouter();
  const { data } = useFetch(`/api/page-views-preview?id=${heroPost.uid}`, true)

  const views = data?.total;

  return (
    <Container>
      <ImageContainer>
        <CoverImage title={RichText.asText(heroPost.data.title)} src={heroPost.data.coverimage.url} slug={heroPost.uid} />
        <ImageMask></ImageMask>
        <TitleContainer>
          <h3>
            <Link as={`/posts/${heroPost.uid}`} href="/posts/[slug]">
              <a className="hover:underline" >{RichText.asText(heroPost.data.title)}</a>
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={heroPost.data.date} />
            <PostViews>{` - ${views >= 0 ? views : "..."} views`}</PostViews>
          </div>
        </TitleContainer>
      </ImageContainer>

        <InfoContainer>
          <p className="text-lg leading-relaxed mb-4">{RichText.asText(heroPost.data.excerpt)}             
            <Link as={`/posts/${heroPost.uid}`} href="/posts/[slug]">
              <a className="hover:underline" style={{ fontStyle: "italic", color: "#FFB800" }} href="/posts/[slug]">...ler mais</a> 
            </Link>
          </p>

          <Avatar name={author.name} picture={author.picture} />
        </InfoContainer>
    </Container>
  )
}

export default HeroPost

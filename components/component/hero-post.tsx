import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../../types/author'
import { useFetch } from '@/lib/fetcher'
import PostViews from './post-views'

import { Container, ImageContainer, ImageMask, InfoContainer, TitleContainer } from '../styles/hero-post';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {

  const { data } = useFetch(`/api/page-views-preview?id=${slug}`, true)

  const views = data?.total;

  return (
    <Container>
      <ImageContainer>
        <CoverImage title={title} src={coverImage} slug={slug} />
        <ImageMask></ImageMask>
        <TitleContainer>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={date} />
            <PostViews>{` - ${views >= 0 ? views : "..."} views`}</PostViews>
          </div>
        </TitleContainer>
      </ImageContainer>

        <InfoContainer>
          <p className="text-lg leading-relaxed mb-4">{excerpt}             
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline" style={{ fontStyle: "italic", color: "#FFB800" }} href="/posts/[slug]">...ler mais</a> 
            </Link>
          </p>

          <Avatar name={author.name} picture={author.picture} />
        </InfoContainer>
    </Container>
  )
}

export default HeroPost

import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../../types/author'
import PostViews from './post-views'
import { PostHeaderContainer, ImageContainer, ImageMask, TitleContainer } from '../styles/post-header'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  views: number
}

const PostHeader = ({ title, coverImage, date, author, views }: Props) => {
  return (
    <PostHeaderContainer>
      <PostTitle>{title}</PostTitle>
      <ImageContainer>
        <CoverImage title={title} src={coverImage} />
        <ImageMask></ImageMask>
          <TitleContainer>
            <DateFormatter dateString={date} />
            <PostViews>{`${views >= 0 ? views : "..."} views`}</PostViews>
          </TitleContainer>
      </ImageContainer>
      <Avatar name={author.name} picture={author.picture} />
    </PostHeaderContainer>
  )
}

export default PostHeader

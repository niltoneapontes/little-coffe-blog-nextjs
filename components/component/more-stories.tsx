import PostPreview from './post-preview'
import Post from '../../types/post'

import { MoreStoriesContainer } from '../styles/more-stories'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <MoreStoriesContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 lg:col-gap-16 row-gap-10 md:row-gap-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </MoreStoriesContainer>
  )
}

export default MoreStories

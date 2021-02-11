import PostPreview from './post-preview'
import Post from '../../types/post'

import { MoreStoriesContainer } from '../styles/more-stories'

type MorePost = {
  post: { 
    uid: string;
    data: {
      title: string;
      excerpt: string;
      coverimage: string;
      date: string;
      body: string;
  }},
  author: {
    name: string;
    picture: string;
  }
}

type Props = {
  posts: MorePost[];
}

const MoreStories = ({ posts }: Props) => {
  return (
    <MoreStoriesContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 lg:col-gap-16 row-gap-10 md:row-gap-16 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.post.uid}
            title={post.post.data.title}
            coverImage={post.post.data.coverimage}
            date={post.post.data.date}
            author={post.author}
            slug={post.post.uid}
            excerpt={post.post.data.excerpt}
          />
        ))}
      </div>
    </MoreStoriesContainer>
  )
}

export default MoreStories

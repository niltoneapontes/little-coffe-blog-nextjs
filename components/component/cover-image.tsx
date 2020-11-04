import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image';

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      height={320}
      width={1200}
      alt={`Cover Image for ${title}`}
      style={{borderRadius: 8}}
    />
  )
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
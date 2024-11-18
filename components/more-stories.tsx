import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>

      <Link href="/posts">
      <h2 className="mb-8 text-md text-gray-800 hover:text-gray-700 font-bold tracking-tighter leading-tight flex flex-row items-center">
        More Stories

        <BsArrowRight className='ml-4'/>
      </h2>
      </Link>
    </section>
  )
}

export default MoreStories

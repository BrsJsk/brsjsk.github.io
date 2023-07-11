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
      <Link href="/posts">
      <h2 className="mb-8 text-4xl text-gray-800 hover:text-gray-700 font-bold tracking-tighter leading-tight flex flex-row items-center">
        More Stories

        <BsArrowRight className='ml-4'/>
      </h2>
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
    </section>
  )
}

export default MoreStories

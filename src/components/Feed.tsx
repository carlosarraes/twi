import { api } from '~/utils/api'
import PostView from './PostView'
import Spinner from './Spinner'

const Feed = () => {
  const { data, isLoading: postsLoading } = api.posts.getAll.useQuery()

  if (postsLoading)
    return (
      <main className="flex justify-center items-center w-full h-screen">
        <Spinner size={40} />
      </main>
    )

  if (!data) return <section>Something went wrong</section>

  return (
    <section>
      {data?.map(({ post, author }) => (
        <PostView key={post.id} post={post} author={author} />
      ))}
    </section>
  )
}

export default Feed

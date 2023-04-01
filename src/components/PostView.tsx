import type { RouterOutputs } from '~/utils/api'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'

dayjs.extend(relativeTime)

type PostWithUser = RouterOutputs['posts']['getAll'][number]

const PostView = (props: PostWithUser) => {
  const { post, author } = props

  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-400 p-8">
      <Image
        src={author.profileImageUrl}
        alt="Profile image"
        className="w-14 h-14 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 text-sm text-slate-300 self-center">
          <span className="font-bold">{`@${author.username}`}</span>
          <span>·</span>
          <span>{`${dayjs(post.createdAt).fromNow()}`}</span>
        </div>
        <span className="text-white">{post.content}</span>
      </div>
    </div>
  )
}

export default PostView

import type { RouterOutputs } from '~/utils/api'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'

dayjs.extend(relativeTime)

type PostWithUser = RouterOutputs['posts']['getAll'][number]

const PostView = ({ post, author }: PostWithUser) => {
  const { username, profileImageUrl } = author
  const { content, createdAt, id } = post

  return (
    <div key={id} className="flex gap-4 border-b border-slate-400 p-8">
      <Image
        src={profileImageUrl}
        alt="Profile image"
        className="w-14 h-14 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 text-sm text-slate-300 self-center">
          <a href={`https://github.com/${username}`}>
            <span className="font-bold hover:underline duration-200">{`@${username}`}</span>
          </a>
          <span>·</span>
          <span>{`${dayjs(createdAt).fromNow()}`}</span>
        </div>
        <span className="text-white">{content}</span>
      </div>
    </div>
  )
}

export default PostView

import { useUser } from '@clerk/nextjs'
import Image from 'next/image'

const PostWiz = () => {
  const { user } = useUser()

  if (!user) {
    return <div>Not signed in</div>
  }

  return (
    <>
      <input
        type="text"
        placeholder="What's happening?"
        className="bg-slate-800 text-white rounded-full w-full h-10 pl-4 outline-none"
      />
      <Image
        src={user.profileImageUrl}
        alt="Profile image"
        className="w-14 h-14 rounded-full"
        width={56}
        height={56}
      />
    </>
  )
}

export default PostWiz

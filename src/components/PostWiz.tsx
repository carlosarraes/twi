import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { api } from '~/utils/api'
import { BsFillSendFill } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import Spinner from './Spinner'

const PostWiz = () => {
  const { user } = useUser()
  const [input, setInput] = useState('')

  const ctx = api.useContext()

  const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
    onSuccess: () => {
      setInput('')
      void ctx.posts.getAll.invalidate()
    },
    onError: () => {
      toast.error("Couldn't post, try again later")
    },
  })

  if (!user) {
    return <div>Not signed in</div>
  }

  return (
    <section className="flex gap-4 p-2">
      <input
        type="text"
        placeholder="What's happening?"
        className="bg-slate-800 text-white rounded-full w-full h-10 pl-4 outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            mutate({ content: input })
          }
        }}
        disabled={isPosting}
      />
      {isPosting ? (
        <Spinner size={30} />
      ) : (
        <button
          type="button"
          className="flex w-10 justify-center items-center bg-slate-800 text-white rounded-full outline-none"
          onClick={() => mutate({ content: input })}
        >
          <BsFillSendFill className="self-center" />
        </button>
      )}
    </section>
  )
}

export default PostWiz

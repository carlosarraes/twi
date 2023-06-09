import { useUser } from '@clerk/nextjs'
import { type NextPage } from 'next'

import { api } from '../utils/api'
import PostWiz from '~/components/PostWiz'
import { FaCrow } from 'react-icons/fa'
import Feed from '~/components/Feed'
import UserProfile from '~/components/UserProfile'

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser()

  api.posts.getAll.useQuery()

  if (!userLoaded) return <div />

  return (
    <>
      <main className="flex justify-center w-full h-screen">
        <section className="w-full border-x border-slate-400 md:max-w-2xl flex flex-col">
          <header className="flex justify-between border-b border-slate-400 p-4">
            <div className="flex p-2 gap-2">
              <h2 className="text-4xl font-bold text-white self-center">
                <FaCrow className="text-5xl" />
              </h2>
              <h1 className="text-4xl self-center">Crowie</h1>
            </div>
            <UserProfile />
          </header>
          <section className="flex-1 oveflow-y-auto">
            <Feed />
          </section>
          {isSignedIn && (
            <section className="bg-slate-700 p-2">
              <PostWiz />
            </section>
          )}
        </section>
      </main>
    </>
  )
}

export default Home

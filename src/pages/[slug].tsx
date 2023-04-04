import { type NextPage } from 'next'
import { api } from '~/utils/api'

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: 'carlosarraes',
  })

  if (isLoading) return <div>Loading...</div>

  if (!data) return <div>Something went wrong</div>

  return (
    <>
      <main className="flex justify-center w-full h-screen">
        <div>{data.username}</div>
      </main>
    </>
  )
}

export default ProfilePage

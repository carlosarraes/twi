import { type NextPage } from 'next'
import Head from 'next/head'

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crowie</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center w-full h-screen">
        <div>Profile View</div>
      </main>
    </>
  )
}

export default ProfilePage
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'

const UserProfile = () => {
  const { user, isSignedIn } = useUser()

  return (
    <div className="flex self-center gap-2">
      {!isSignedIn && <SignInButton />}
      {!!isSignedIn && <SignOutButton />}
      {!user ? (
        <div />
      ) : (
        <Image
          src={user.profileImageUrl}
          alt="Profile image"
          className="w-14 h-14 rounded-full"
          width={56}
          height={56}
        />
      )}
    </div>
  )
}

export default UserProfile

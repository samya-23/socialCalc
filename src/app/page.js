import { auth, currentUser } from '@clerk/nextjs/server'

export async function Page() {
  const userInfo = auth()

  if (userInfo) {
    console.log(userInfo)
  }


  const user = await currentUser()
  if (user) {
    console.log(user)
  }
}

export default function Home() {
  Page();
  return (
    <div>Hi</div>
  );
}

import { auth, currentUser } from '@clerk/nextjs/server'
import  Link  from 'next/link'
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
    <div><button href='\sign-in'><Link href='\sign-in'>Sign in</Link></button></div>
  );
}

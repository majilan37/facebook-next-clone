import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home({session}) {
  if (!session) return <Login />
  else return (
    <div className="bg-gray-50">
      <Head>
        <title>Facebook clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex" >
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
    const session = await getSession(context)
    return {
      props: {
        session
      }
    }
}
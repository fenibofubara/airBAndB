import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styles from '../styles/build/styles.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nutloop | Welcome</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/favicon.svg" />
     </Head>
     <div className="mt-4 p-4 w-1/4 rounded bg-blue-300 text-center">
        <p className="text-red-600">This should be very blue.</p>
      </div>
    </div>
  )
}

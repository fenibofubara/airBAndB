import Head from 'next/head'
import styles from '../../styles/pages/Login.module.css'

export default function Home() {
  return (
      <>
        <Head>
            <title>Nutloop | Welcome</title>
            <meta name='keywords' content='login'/>
            <link rel="icon" href="/favicon.svg" />
        </Head>
        <main className={styles.wrapper}>
                <h1 className="text-red-600">Login</h1>
        </main>
      </>
  
  )
}

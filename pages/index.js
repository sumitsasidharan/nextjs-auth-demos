import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
       <Head>
          <title>Auth Demo</title>
       </Head>

       <nav>
          <button>Sign In</button>
          <button>Sign Out</button>
       </nav>
   </div>
  )
}

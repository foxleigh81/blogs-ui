import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'


// Import Types
import Post from '../types/post'

// Import styles
import styles from '../themes/Home.module.scss'


const getPosts = async () => {
  const res = await fetch(process.env.API_ENDPOINT + '/posts')
  const posts = await res.json()
  return posts
}
const Home: NextPage = () => {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then(posts => {
      setPosts(posts)
    })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['post-grid']}>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Love
        </a>
      </footer>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Prerender from './pre-render'
import UserList from './user'
export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('first')
    router.push('/product')
  }

  return (
    <div className={styles.container}>
      <h2>Next-js pre-Rendering</h2>
      <Link href="/user">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      {/* <Prerender /> */}
      {/* <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <Button colorScheme="teal" size="xs" onClick={handleClick}>
        Place Order
      </Button> */}
    </div>
  )
}

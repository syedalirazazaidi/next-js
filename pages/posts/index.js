import React from 'react'
import { Box, Heading, HStack, Text, Divider } from '@chakra-ui/react'
import Post from '../../components/post'
import Link from 'next/link'
const PostList = ({ posts }) => {
  return (
    <>
      <Box>
        <Heading mx={['104px', '610px', '610px']} my="20px">
          list of user
        </Heading>
        {posts.map((post) => {
          return (
            <Box key={post.id} mx={['10px', '150px', '290px']}>
              <HStack spacing="40px">
                <Link href={`posts/${post.id}`} passHref>
                  <Text>
                    {post.id}-{post.title}
                  </Text>
                </Link>
              </HStack>
              <Divider></Divider>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  }
}

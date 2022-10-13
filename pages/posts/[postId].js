import { Heading, Text } from '@chakra-ui/react'

function Post({ post }) {
  return (
    <>
      <Heading fontSize='25px'>
        {post.id}
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </>
  )
}
export default Post

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

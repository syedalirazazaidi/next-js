import React from 'react'
import { Box, Divider, Heading, HStack, Text } from '@chakra-ui/react'
const Post = ({ post }) => {
  return (
    <Box mx='190px'>
      <HStack spacing="40px">
        <Text>{post.id}</Text>

        <Text>{post.title}</Text>
      </HStack>
      <Divider></Divider>
    </Box>
  )
}

export default Post

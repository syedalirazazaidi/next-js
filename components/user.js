import { Box, Heading, HStack, Text } from '@chakra-ui/react'
function User({ user }) {
  return (
    <HStack spacing="40px">
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </HStack>
  )
}
export default User

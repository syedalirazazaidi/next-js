import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import User from '../components/user'

const UserList = ({ users }) => {
  return (
    <>
      <Heading>list of user</Heading>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        )
      })}
    </>
  )
}

export default UserList

// getStaticProps its only run server side
// it can be used only for pre-rendering and not client-side data fetching
// it run on build time

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}

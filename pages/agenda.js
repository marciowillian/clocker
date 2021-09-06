import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useFetch } from '@refetty/react'

import { Button, Container, Box, IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { useAuth, Logo, formatDate } from './../components'

const getAgenda = ({ token, when }) =>
  axios({
    method: 'get',
    url: '/api/agenda',
    params: { when },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

const Header = ({ children }) => (
  <Box p={4} display="flex" alignItems="center" justifyContent="space-between">
    {children}
  </Box>
)

export default function Agenda() {
  const [auth, { logout }] = useAuth()
  const router = useRouter()
  const [when, setWhen] = useState(() => new Date())
  // const [data, { loading, status, error }, fetch] = useFetch(() =>
  //   getAgenda(when)
  // )

  useEffect(() => {
    !auth.user && router.push('/')
  }, [auth.user])

  return (
    <Container>
      <Header>
        <Logo size={150} />
        <Button onClick={logout}>Sair</Button>
      </Header>
      <Box mt={8} display="flex" alignItems="center">
        <IconButton icon={<ChevronLeftIcon />} bg="transparent" />
        <Box flex={1} textAlign="center">
          {formatDate(new Date(), 'PPPP')}
        </Box>
        <IconButton icon={<ChevronRightIcon />} bg="transparent" />
      </Box>
    </Container>
  )
}

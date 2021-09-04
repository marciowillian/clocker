import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Button,
  Conatainer,
  Box,
  Container,
  IconButton
} from '@chakra-ui/react'
import { useFetch } from '@refetty/react'
import axios from 'axios'
import { addDays, subDays } from 'date-fns'
import { Logo, useAuth, formatDate } from './../components'

const getAgenda = when =>
  axios({
    method: 'get',
    url: '/api/agenda',
    params: { when }
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })

export default function Agenda() {
  const [auth, { logout }] = useAuth()
  const router = useRouter()
  const [when, setWhen] = useState(() => new Date())
  const [data, { loading, status, error }, fetch] = useFetch(() =>
    getAgenda(when)
  )

  const Header = ({ children }) => (
    <Box
      padding={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      {children}
    </Box>
  )

  const addDay = () => setWhen(prevState => addDays(prevState, 1))

  const removeDay = () => setWhen(prevState => subDays(prevState, 1))

  useEffect(() => {
    !auth.user && router.push('/')
  }, [auth.user])

  useEffect(() => {
    fetch(when)
  }, [when])

  return (
    <Container>
      <Header>
        <Logo size={150} />
        <Button onClick={logout}>Sair</Button>
      </Header>

      <Box mt={8} display="flex" alignItems="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          bg="transparent"
          onClick={removeDay}
        />
        <Box flex={1} textAlign="center">
          {formatDate(when, 'PPPP')}
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          bg="transparent"
          onClick={addDay}
        />
      </Box>
    </Container>
  )
}

import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp


function App({ Component }) {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}
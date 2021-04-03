import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ChakraProvider,
  Container,
  extendTheme,
  Box
} from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    dark: {
      500: "#0f2a3b",
    },
    nTomato: {
      500: "#ff5e37",
    },
    light: {
      100: "#f7f7f7"
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box bg="light.100" h="100vh">
        <Container maxW="container.xl">
          <App />
        </Container>
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

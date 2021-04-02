import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  colors: {
    dark: {
      500: "#0f2a3b",
    },
    nTomato: {
      500: "#ff5e37",
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <App />
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

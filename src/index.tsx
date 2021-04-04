import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ChakraProvider,
  Container,
  extendTheme,
  Box
} from "@chakra-ui/react"
import { ProductProvider } from './context/product';
import { CartProvider } from './context/cart';

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
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </Container>
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

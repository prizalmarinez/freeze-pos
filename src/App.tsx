import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Flex,
  Box,
  Grid,
} from "@chakra-ui/react"
// components
import { ProductItem } from './components/products/ProductItem'
import { AddProductBtn } from './components/products/AddProductBtn'
import { UserAvatar } from './components/users/UserAvatar'
import { Cart } from './components/cart/Cart'
// pages
import { AddProduct } from './pages/AddProduct'

function App() {
  const test = [3, 1, 2, 3, 2, 2, 2,]

  const ProductList = test.map(() => {
    return (
      <ProductItem name="Hawaian Pizza" price={20} quantity={3} />
    )
  })

  const MainWindow = () => {
    return (
      <Flex>
        <Box flex="1" p="5">
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            <AddProductBtn />
            {ProductList}
          </Grid>
        </Box>
        <Box w="400px">
          <Box p="5">
            <UserAvatar img="https://bit.ly/dan-abramov" name="dan abramov" />
            <Box mt="3">
              <Cart />
            </Box>
          </Box>
        </Box>
      </Flex>
    )
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainWindow />
          </Route>
          <Route path="/products/add">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



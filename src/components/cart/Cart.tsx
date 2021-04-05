import React from 'react'
import {
    Flex,
    Box,
    Spacer,
    Heading,
    Button,
} from "@chakra-ui/react"
import { CartItem } from './CartItem'
import { CheckoutPayment } from './CheckoutPayment'
import { useCart } from '../../context/cart'

export const Cart: React.FC = () => {
    const { state, dispatch } = useCart()
    console.log('CART LOAD')
    const cartList = state.cart
        .sort((a, b) => b.tPrice - a.tPrice)
        .map(({ name, price, quantity, uid, tPrice }) => {
            return (
                <CartItem key={uid} name={name} quantity={quantity} price={price} tPrice={tPrice} />
            )
        })

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }

    return (
        <Box boxShadow="base" rounded="md" bg="white">
            <Box p="3">
                <Flex>
                    <Heading size="md">
                        Cart
                    </Heading>
                    <Spacer />
                    {state.cart.length > 0 ? <Box>
                        <Button onClick={() => clearCart()} size="xs" colorScheme="nTomato">
                            Clear
                        </Button>
                    </Box> : null}
                </Flex>
            </Box>
            <Box p="3" maxH="320" h="320" overflowY="auto">
                {cartList}
            </Box>
            <Box p="3">
                <Flex>
                    <Heading size="md">
                        Discount
                    </Heading>
                    <Spacer />
                    <Heading size="md">
                        0
                    </Heading>
                </Flex>
                <Flex pt="2">
                    <Heading size="md">
                        Total
                    </Heading>
                    <Spacer />
                    <Heading size="md">
                        ${state.cTotal}
                    </Heading>
                </Flex>
                <Box pt="3">
                    {/* <Button disabled={state.cart.length <= 0} isFullWidth colorScheme="nTomato">
                        Checkout
                    </Button> */}
                    <CheckoutPayment total={state.cTotal} />
                </Box>
            </Box>
        </Box>
    );
}
import React from 'react'
import {
    Flex,
    Box,
    Spacer,
    Heading,
    Button,
} from "@chakra-ui/react"
import { CartItem } from './CartItem'
import { useCart } from '../../context/cart'

export const Cart: React.FC = () => {
    const { state } = useCart()

    const cartList = state.cart.map(({ name, price, quantity, uid }) => {
        return (
            <CartItem key={uid} name={name} quantity={quantity} price={price} />
        )
    })

    return (
        <Box boxShadow="base" rounded="md" p="3" bg="white" h="400">
            <Box mb="3">
                <Flex>
                    <Heading size="md">
                        Cart
                    </Heading>
                    <Spacer />
                    <Box>
                        <Button size="xs" colorScheme="nTomato">
                            Clear
                        </Button>
                    </Box>
                </Flex>
            </Box>
            {cartList}
        </Box>
    );
}
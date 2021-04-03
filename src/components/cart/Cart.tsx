import React from 'react'
import {
    Flex,
    Box,
    Spacer,
    Heading,
    Button,
} from "@chakra-ui/react"
import { CartItem } from './CartItem'

export const Cart: React.FC = () => {
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
            <CartItem name="pizza" quantity={100} price={20} />
        </Box>
    );
}
import React from 'react'
import {
    Flex,
    Box,
    Text
} from '@chakra-ui/react'
import { useCart } from '../../context/cart'

interface Props {
    name: string,
    price: number,
    quantity: number,
    uid: number
}

export const ProductItem: React.FC<Props> = ({ name, price, uid }) => {
    const { dispatch } = useCart()

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART', payload: {
                name,
                price,
                quantity: 1,
                uid
            }
        })
    }

    return (
        <div >
            <Flex
                onClick={() => addToCart()}
                as="button"
                p="3"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                h="187"
                boxShadow="base"
                rounded="md"
                bg="white"
                _hover={{ bg: "dark.500", color: 'nTomato.500' }}
            >
                <Box as="b" p="5">
                    <Text fontSize="24px" textTransform="capitalize">
                        {name}
                    </Text>
                </Box>
                <Text fontSize="20px">
                    ${price}
                </Text>
            </Flex >
        </div>
    );
}
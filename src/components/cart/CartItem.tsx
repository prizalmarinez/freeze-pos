import React from 'react'
import {
    Flex,
    Box,
    Circle,
    Text,
    Spacer,
    Divider,
} from "@chakra-ui/react"

interface Props {
    quantity: number,
    name: string,
    price: number,
    tPrice: number
}

export const CartItem: React.FC<Props> = ({ quantity, name, price, tPrice }) => {
    return (
        <Box>
            <Flex>
                <Box pt="2">
                    <Circle w="36px" h="36px" bg="dark.500" color="white">
                        {quantity}
                    </Circle>
                </Box>
                <Box pl="4">
                    <Text as="b" textTransform="capitalize">
                        {name}
                    </Text>
                    <br />
                    <Text >
                        ${price}
                    </Text>
                </Box>
                <Spacer />
                <Box pt="1">
                    <Text as="b" fontSize="20px">
                        ${tPrice}
                    </Text>
                </Box>
            </Flex>
            <Divider mt="3" />
        </Box>
    );
}
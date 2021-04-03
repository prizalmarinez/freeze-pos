import React from 'react'

import {
    Flex,
    Box,
    Text
} from '@chakra-ui/react'

interface Props {
    name: string,
    price: number,
    quantity: number
}

export const ProductItem: React.FC<Props> = ({ name, price }) => {
    
    return (
        <div>
            <Flex
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
                    <Text fontSize="24px">
                        {name}
                    </Text>
                </Box>
                <Text fontSize="20px">
                    {price}
                </Text>
            </Flex >
        </div>
    );
}
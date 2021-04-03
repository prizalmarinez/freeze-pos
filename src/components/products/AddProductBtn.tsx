import React from 'react'
import {
    Flex,
    Box,
    Text,
} from "@chakra-ui/react"

export const AddProductBtn: React.FC = () => {
    return (
        <Flex as="button" alignItems="center" justifyContent="center" w="100%" h="187" boxShadow="base" rounded="md" bg="white"
            _hover={{ bg: "dark.500", color: 'nTomato.500' }}
        >
            <Box pt="2">
                <Text fontSize="20px" as="b">
                    +
                </Text>
            </Box>
        </Flex >
    );
}
import React from 'react'
import { useHistory } from "react-router-dom";
import {
    Flex,
    Box,
    Text,
    Icon
} from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"

export const AddProductBtn: React.FC = () => {
    const router = useHistory()
    return (
        <Flex
            onClick={() => router.push('/products/add')}
            as="button"
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="187"
            boxShadow="base"
            rounded="md"
            bg="white"
            color="nTomato.500"
            _hover={{ bg: "dark.500", color: 'nTomato.500' }}
        >
            <Box pt="2">
                <Icon as={FaPlus}  fontSize="20px" />
            </Box>
        </Flex >
    );
}
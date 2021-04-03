import React from 'react'
import {
    Center,
    Box,
    Heading,
    IconButton,
    Icon,
    Flex
} from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
// components
import { AddProductForm } from '../components/products/AddProductForm'

export const AddProduct: React.FC = () => {
    const router = useHistory()

    return (
        <Center pt="10">
            <Box w="400px" boxShadow="base" rounded="md" p="5" bg="white">
                <Flex>
                    <IconButton
                        colorScheme="dark"
                        aria-label="Search database"
                        icon={<Icon as={FaRegArrowAltCircleLeft} />}
                        onClick={() => router.push('/')}
                    />
                    <Heading pl="2" size="lg">Add Product</Heading>
                </Flex>
                <AddProductForm />
            </Box>
        </Center>
    );
}
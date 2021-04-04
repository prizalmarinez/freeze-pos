import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    useToast
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { useProduct } from '../../context/product'

interface ProductForm {
    name: string,
    price: number,
    quantity: number,
}

export const AddProductForm: React.FC = () => {
    const toast = useToast()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductForm>();
    const { dispatch } = useProduct()

    const onSubmit = handleSubmit(data => {
        const { name, price, quantity } = data
        dispatch({
            type: 'ADD_PRODUCT', payload: {
                name,
                price,
                quantity,
                uid: Math.random()
            }
        })
        toast({
            title: "Product created.",
            description: "Product Successfully Added!",
            status: "success",
            duration: 5000,
            isClosable: true,
        })
        reset({})
    });

    return (
        <Box pt="2">
            <form onSubmit={onSubmit}>
                <FormControl id="name" pt="5">
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Product name."  {...register("name")} />
                    <FormHelperText>
                        Add Product name
                    </FormHelperText>
                </FormControl>
                <FormControl id="price" pt="3">
                    <FormLabel>Price</FormLabel>
                    <Input placeholder="10 - 300" type="number" max={300} min={10} {...register("price")} />
                    <FormHelperText>
                        Price will range to 10 - 300
                    </FormHelperText>
                </FormControl>
                <FormControl id="quantity" pt="3">
                    <FormLabel>Quantity</FormLabel>
                    <Input placeholder="10 - 9999" type="number" max={9999} min={10} {...register("quantity")} />
                    <FormHelperText>
                        Quantity will range to 10 - 9999
                    </FormHelperText>
                </FormControl>
                <Box pt="5">
                    <Button type="submit" isFullWidth colorScheme="nTomato" size="md">
                        Button
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
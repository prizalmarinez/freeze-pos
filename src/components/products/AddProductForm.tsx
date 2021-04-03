import React from 'react'
import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    NumberInput,
    NumberInputField
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form';

interface ProductForm {
    name: string,
    price: number,
    quantity: number,
}

export const AddProductForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>();
    const onSubmit = handleSubmit(data => console.log(data));

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
                    <NumberInput max={300} min={10}>
                        <NumberInputField {...register("price")} />
                    </NumberInput>
                    <FormHelperText>
                        Price will range to 10 - 300
                    </FormHelperText>
                </FormControl>
                <FormControl id="quantity" pt="3">
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput max={9999} min={10}>
                        <NumberInputField {...register("quantity")} />
                    </NumberInput>
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
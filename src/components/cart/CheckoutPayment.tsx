import React, { useState } from 'react'
import {
    Modal,
    ModalContent,
    useDisclosure,
    Button,
    Box,
    Heading,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Spacer
} from "@chakra-ui/react"

interface Props {
    total: number,
}

const CheckoutForm = (props: any) => {
    const { total } = props
    const [money, setMoney] = useState<any>(0)

    return (
        <div>
            <form>
                <FormControl id="money" mb="3">
                    <FormLabel>Money</FormLabel>
                    <Input
                        type="number"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)}
                    />
                </FormControl>
                <Flex pt="2">
                    <Heading size="md">
                        Total
                    </Heading>
                    <Spacer />
                    <Heading size="md">
                        ${total}
                    </Heading>
                </Flex>
                <Flex>
                    <Heading size="md">
                        Change
                    </Heading>
                    <Spacer />
                    <Heading size="md">
                        {money - total}
                    </Heading>
                </Flex>
                <Box mt="4">
                    <Button colorScheme="nTomato" isFullWidth isDisabled={(money - total) < 0}>
                        Checkout
                    </Button>
                </Box>
            </form >
        </div>
    )
}

export const CheckoutPayment: React.FC<Props> = ({ total }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                isFullWidth
                isDisabled={total <= 0}
                colorScheme="nTomato"
                onClick={onOpen}
            >
                PAY
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent bg="dark.500" color="white">
                    <Box p="5" display="flex" alignItems="center" justifyContent="center">
                        <Heading size="md">
                            Payment
                        </Heading>
                    </Box>
                    <Box p="5">
                        <CheckoutForm total={total} />
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}


// TODO: Implement this if chakra ui error fixed
// const PaymentCards = (props: any) => {
//     const { getInputProps, getCheckboxProps } = useRadio(props)

//     const input = getInputProps()
//     const checkbox = getCheckboxProps()

//     return (
//         <Box as="label" mx="2">
//             <input {...input} />
//             <Flex
//                 {...checkbox}
//                 cursor="pointer"
//                 borderWidth="1px"
//                 borderRadius="md"
//                 borderColor="dark.500"
//                 boxShadow="lg"
//                 w="120px"
//                 h="120px"
//                 alignItems="center"
//                 justifyContent="center"
//                 _checked={{
//                     bg: "dark.500",
//                     color: "white",
//                 }}
//                 p="5"
//             >
//                 <Text textTransform="uppercase" as="b">
//                     {props.children}
//                 </Text>
//             </Flex>
//         </Box>
//     )
// }

// const PaymentSelection = () => {
//     const options = ["cash", "credit"]

//     const { getRootProps, getRadioProps } = useRadioGroup({
//         name: "payment",
//         defaultValue: "cash",
//         onChange: console.log,
//     })

//     const group = getRootProps()

//     return (
//         <Flex {...group} justify="center">
//             {options.map((value) => {
//                 const radio = getRadioProps({ value })
//                 return (
//                     <PaymentCards key={value} {...radio}>
//                         {value}
//                     </PaymentCards>
//                 )
//             })}
//         </Flex>
//     )
// }

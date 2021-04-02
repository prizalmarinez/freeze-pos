import React from 'react';
import './App.css';
import {
  Flex,
  Box,
  Circle,
  Text,
  Avatar,
  Spacer,
  IconButton,
  Divider,
  Heading
} from "@chakra-ui/react"
import { ArrowDownIcon, MinusIcon } from '@chakra-ui/icons'

const UserAvatar = () => {
  return (
    <Box maxW="sm" borderWidth="1px" p="3" borderRadius="lg">
      <Flex color="dark.500">
        <Box pt="1">
          <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Box>
        <Box pl="4" pt="1.5">
          <Text as="b">
            Dan Abrahmov
          </Text>
        </Box>
        <Spacer />
        <Box pt="1">
          <IconButton
            aria-label="Dropdown"
            fontSize="20px"
            isRound={true}
            colorScheme="dark"
            size="sm"
            icon={<ArrowDownIcon />}
          />
        </Box>
      </Flex>
    </Box>
  )
}

const ReceiptItem = () => {
  return (
    <div>
      <Box>
        <Flex>
          <Box pt="1">
            <Circle w="36px" h="36px" bg="dark.500" color="white">
              12
            </Circle>
          </Box>
          <Box pl="4" pt="1.5">
            <Text as="b">
              asdasdasd
            </Text>
          </Box>
          <Spacer />
          <Box pt="1">
            <IconButton
              aria-label="Dropdown"
              fontSize="20px"
              isRound={true}
              colorScheme="nTomato"
              size="sm"
              icon={<MinusIcon />}
            />
          </Box>
        </Flex>
        <Divider mt="3" />
      </Box>
    </div>
  )
}

const Cart = () => {
  return (
    <div>
      <Box color="dark.500" maxW="sm" borderWidth="1px" p="3" borderRadius="lg">
        <Box mb="3">
          <Heading size="md">
            Cart
          </Heading>
        </Box>
        <ReceiptItem />
      </Box>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Flex mt="5">
        <Box flex="3" p="5" bg="white">
          box
        </Box>
        <Box flex="1.5" p="5">
          <UserAvatar />
          <Box mt="3">
            <Cart />
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default App;



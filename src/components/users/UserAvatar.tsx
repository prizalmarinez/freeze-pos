import React from 'react'
import {
    Flex,
    Box,
    Text,
    Avatar,
    Spacer,
    IconButton,
} from "@chakra-ui/react"
import { ArrowDownIcon } from '@chakra-ui/icons'

interface Props {
    img: string,
    name: string
}

export const UserAvatar: React.FC<Props> = ({ img, name }) => {
    return (
        <Box boxShadow="base" rounded="md" bg="white" p="3"  >
            <Flex color="dark.500">
                <Box pt="1">
                    <Avatar size="sm" name="Dan Abrahmov" src={img} />
                </Box>
                <Box pl="4" pt="1.5">
                    <Text as="b" textTransform="capitalize">
                        {name}
                    </Text>
                </Box>
                <Spacer />
                <Box pt="1">
                    <IconButton
                        aria-label="Dropdown"
                        fontSize="20px"
                        isRound={true}
                        color="dark.500"
                        size="sm"
                        icon={<ArrowDownIcon />}
                    />
                </Box>
            </Flex>
        </Box>
    );
}
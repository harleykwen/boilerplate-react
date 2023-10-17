import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const NoutFound: React.FC = () => {
    return (
        <Flex
            width='100vw'
            height='100vh'
            justifyContent='center'
            alignItems='center'
            gap='1.5rem'
        >
            <Text fontSize='xl' letterSpacing='2px'>
                404
            </Text>
            <Text fontSize='xl' letterSpacing='2px'>
                RESOURCE NOT FOUND
            </Text>
        </Flex>
    )
}

export default NoutFound

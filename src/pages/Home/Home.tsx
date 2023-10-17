import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Home: React.FC = () => {
    return (
        <Flex
            width='100vw'
            height='100vh'
            justifyContent='center'
            alignItems='center'
            gap='1.5rem'
        >
            <Text fontSize='xl' letterSpacing='2px'>
                HOME
            </Text>
        </Flex>
    )
}

export default Home
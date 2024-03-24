import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastWeather from './components/ForecastWeather'
import { MdNightsStay, MdSunny } from 'react-icons/md'
import { 
    Container, 
    Flex, 
    IconButton,
    Text,
    useColorMode, 
} from '@chakra-ui/react'

const Weather: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container maxWidth='container.xl'>
            <Flex 
                minHeight='100vh' 
                width='100%' 
                paddingY='1rem'
                gap='1rem'
                direction='column'
            >
                <Flex alignItems='center' justifyContent='space-between'>
                    <Text 
                        fontSize='12px' 
                        fontStyle='italic' 
                        fontWeight='bold'
                    >All Data Are Powered By OpenWeather</Text>
                    <IconButton 
                        icon={colorMode == 'light' ? <MdSunny fontSize='16px' /> : <MdNightsStay fontSize='16px' />} 
                        aria-label={colorMode == 'light' ? 'light' : 'dark'}
                        color={colorMode == 'light' ? 'yellow.500' : 'gray.500'}
                        onClick={toggleColorMode}
                    />
                </Flex>
                <Flex
                    gap='1rem' 
                    direction={{ base: 'column', sm: 'row' }}
                >
                    <CurrentWeather />
                    <ForecastWeather />
                </Flex>
            </Flex>
        </Container>
    )
}

export default Weather
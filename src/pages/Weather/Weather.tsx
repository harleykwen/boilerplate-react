import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import ForecastWeather from './components/ForecastWeather'
import { Flex } from '@chakra-ui/react'

const Weather: React.FC = () => {
    return (
        <Flex 
            minHeight='100vh' 
            width='100%' 
            padding='1rem'
            gap='1rem'
        >
            <CurrentWeather />
            <ForecastWeather />
        </Flex>
    )
}

export default Weather
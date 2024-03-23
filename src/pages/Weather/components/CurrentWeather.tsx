import React from 'react'
import { useQuery } from 'react-query'
import { currentWeatherApi } from '../../../services/weather.service'
import { 
    Divider,
    Flex, 
    Image, 
    Text, 
} from '@chakra-ui/react'

const CurrentWeather: React.FC = () => {
    const currentWeather = useQuery(
        'current-weather', 
        () => currentWeatherApi({
            lat: -6.706323,
            lon: 107.499404,
            appid: '5d7c991b8820fd9339ecc4b4fc51d75a',
        })
    )

    return (
        <Flex 
            padding='1rem' 
            shadow='normal' 
            borderRadius='16px'
            height='min-content'
            direction='column'
            width='max-content'
        >
            {currentWeather?.data
                ?   <>
                        <Image src={`https://openweathermap.org/img/wn/${currentWeather?.data?.weather[0]?.icon}@4x.png`} alt='weather-icon' />
                        <Text fontSize='36px' fontWeight='semibold'>{Math.ceil(currentWeather?.data?.main?.temp - 273.15)}°</Text>
                        <Text fontSize='14px' fontWeight='semibold' textTransform='capitalize'>{currentWeather?.data?.weather[0]?.description}</Text>
                        <Divider marginY='1rem' />
                        <Text fontSize='12px' color='gray.500'>Tinggi: {Math.ceil(currentWeather?.data?.main?.temp_min - 273.15)}°</Text>
                        <Text fontSize='12px' color='gray.500'>Rendah: {Math.ceil(currentWeather?.data?.main?.temp_max - 273.15)}°</Text>
                        <Text fontSize='12px' color='gray.500'>Terasa seperti: {Math.ceil(currentWeather?.data?.main?.feels_like - 273.15)}°</Text>
                    </>
                :   null
            }
        </Flex>
    )
}

export default React.memo(CurrentWeather)
import React from 'react'
import { useQuery } from 'react-query'
import { forecastWeatherApi } from '../../../services/weather.service'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { 
    Flex, 
    Image, 
    Text, 
} from '@chakra-ui/react'

const ForecastWeather: React.FC = () => {
    const forecastWeather = useQuery(
        'forecast-weather',
        () => forecastWeatherApi({
            lat: -6.706323,
            lon: 107.499404,
            appid: '5d7c991b8820fd9339ecc4b4fc51d75a',
        })
    )

    const groupByDay = (array: any[]) => {
        return array.reduce((acc, obj) => {
            const date = new Date(obj.dt*1000)
            const dateKey = format(new Date(date), 'yyyy-LL-dd')
            if (!acc[dateKey]) {
                acc[dateKey] = []
            }
            acc[dateKey].push(obj)
            return acc
        }, {})
    }

    return (
        <Flex direction='column' gap='1.5rem'>
            {forecastWeather?.data
                ?   Object.entries(groupByDay(forecastWeather?.data?.list))?.map((data: any, index: number) => {
                        const key = data[0]
                        const value = data[1]
                        return (
                            <Flex key={index} gap='0.5rem' alignItems='center'>
                                <Flex direction='column' width='150px'>
                                    <Text fontSize='12px' fontWeight='semibold'>{format(new Date(key), 'eeee', { locale: id })}</Text>
                                    <Text fontSize='12px' color='gray.500'>{format(new Date(key), 'dd LLLL yyyy', { locale: id })}</Text>
                                </Flex>
                                {value?.map((weather: any, weatherIndex: number) => {
                                    return (
                                        <Flex 
                                            key={weatherIndex} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center'
                                        >
                                            <Image width='75px' src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} />
                                            <Text fontSize='12px' fontWeight='semibold'>{Math.ceil(weather?.main?.temp - 273.15)}°</Text>
                                            <Text fontSize='12px' color='gray.500'>{format(new Date(weather?.dt*1000), 'HH:mm')}</Text>
                                        </Flex>
                                    )
                                })}
                            </Flex>
                        )
                    })
                :   null
            }
        </Flex>
    )
}

export default React.memo(ForecastWeather)
import React from 'react'
import { useQuery } from 'react-query'
import { forecastWeatherApi } from '../../../services/weather.service'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { 
    Flex, 
    Image, 
    Skeleton, 
    Text, 
} from '@chakra-ui/react'

const ForecastWeather: React.FC = () => {
    const forecastWeather = useQuery(
        'forecast-weather',
        () => forecastWeatherApi({
            lat: -6.706323,
            lon: 107.499404,
            appid: import.meta.env.VITE_WEATHER_API_KEY,
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
        <Flex 
            direction='column' 
            gap='1.5rem' 
        >
            {forecastWeather?.isFetching
                ?   [...Array(6)]?.map((_, index: number) => {
                        return (
                            <Flex key={index} gap='0.5rem' alignItems='center'>
                                <Flex 
                                    direction='column' 
                                    width='75px' 
                                    alignItems='center' 
                                    justifyContent='center'
                                >
                                    <Skeleton height='18px' width='30px' />
                                    <Skeleton height='18px' width='30px' />
                                    <Skeleton height='18px' width='30px' />
                                </Flex>
                                {[...Array(8)]?.map((_, weatherIndex: number) => {
                                    return (
                                        <Flex 
                                            key={weatherIndex} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center'
                                        >
                                            <Skeleton width='75px' height='75px' />
                                            <Skeleton height='18px' width='30px' />
                                            <Skeleton height='18px' width='30px' />
                                        </Flex>     
                                    )
                                })}
                            </Flex>
                        )
                    })
                :   null
            }

            {!forecastWeather?.isFetching && forecastWeather?.data
                ?   Object.entries(groupByDay(forecastWeather?.data?.list))?.map((data: any, index: number) => {
                        const key = data[0]
                        const value = data[1]
                        return (
                            <Flex 
                                key={index} 
                                gap='0.5rem' 
                                alignItems='center'
                                overflow='auto' 
                                width='max-content' 
                            >
                                <Flex 
                                    direction='column' 
                                    width='75px' 
                                    alignItems={{ base: 'flex-start', sm: 'center' }} 
                                    justifyContent='center'
                                >
                                    <Text fontSize='12px' fontWeight='semibold'>{format(new Date(key), 'eee', { locale: id })}</Text>
                                    <Text fontSize='12px' fontWeight='semibold'>{format(new Date(key), 'dd', { locale: id })}</Text>
                                    <Text fontSize='12px' color='gray.500'>{format(new Date(key), 'LLL', { locale: id })}</Text>
                                </Flex>
                                {value?.map((weather: any, weatherIndex: number) => {
                                    return (
                                        <Flex 
                                            key={weatherIndex} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center'
                                            width='max-content'
                                        >
                                            <Image 
                                                width='75px' 
                                                height='75px' 
                                                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} 
                                            />
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
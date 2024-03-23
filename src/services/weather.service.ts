import ENDPOINTS from "./endpoints"
import requestConfig from "./requestConfig"
import { AxiosResponse } from "axios"

interface ICurrentWeatherApiProps {
    lon: number
    lat: number
    appid: string
}

export async function currentWeatherApi(props: ICurrentWeatherApiProps) {
    try {
        const response: AxiosResponse = await requestConfig.get(ENDPOINTS?.CURRENT_WEATHER, {
            params: { 
                lang: 'id',
                ...props,
            }
        })
        return response?.data
    } catch (error: any) {
        throw 'ERROR GET CURRENT WEATHER'
    }
}

interface IForecastWeatherApiProps {
    lon: number
    lat: number
    appid: string
}

export async function forecastWeatherApi(props: IForecastWeatherApiProps) {
    try {
        const response: AxiosResponse = await requestConfig.get(ENDPOINTS?.FORECAST_WEATHER, {
            params: { 
                lang: 'id',
                ...props,
            }
        })
        return response?.data
    } catch (error: any) {
        throw 'ERROR GET FORECAST WEATHER'
    }
}
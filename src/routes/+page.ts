import type { RequestEvent } from '@sveltejs/kit'
import type { PageLoad } from './$types'

type Current = {
  currentTemp: number
  highFeelsLike: number
  highTemp: number
  iconCode: number
  lowFeelsLike: number
  lowTemp: number
  windSpeed: number
  precip: number
  time: number
  temperature: number
  windspeed: number
  weathercode: number
  temperature_2m_max: number
  temperature_2m_min: number
  apparent_temperature_max: number
  apparent_temperature_min: number
}

type Day = {
  iconCode: number
  maxTemp: number
  timestamp: number
  temperature_2m_max: number
  temperature_2m_min: number
  apparent_temperature: number
  apparent_temperature_max: number
  apparent_temperature_min: number
  windspeed_10ma: number
  precipitation: number
}

type Hour = {
  feelsLike: number
  iconCode: number
  precip: number
  temp: number
  timestamp: number
  windSpeed: number
  time: number[]
  weathercode: number[]
  precipitation: number[]
  temperature_2m: number[]
  apparent_temperature: number[]
  windspeed_10m: number[]
}

type All_Weather = {
  current_weather: Current
  daily?: Day
  hourly: Hour
}

const URL =
  'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime'

const parseCurrentWeather = ({ current_weather, daily, hourly }: All_Weather) => {
  const {
    temperature: currentTemp,
    windspeed: windSpeed,
    weathercode: iconCode,
  } = current_weather

  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    apparent_temperature_max: [maxFeelsLike],
    apparent_temperature_min: [minFeelsLike],
  } = daily as Day

  const {
    precipitation: [precip],
  } = hourly as Hour

  return {
    currentTemp: Math.round(currentTemp),
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    highFeelsLike: Math.round(maxFeelsLike),
    lowFeelsLike: Math.round(minFeelsLike),
    windSpeed: Math.round(windSpeed),
    precip: Math.round((precip * 1000) / 100),
    iconCode,
  }
}

const parseDailyWeather = ({ daily }: any) => {
  return daily.time.map((time: number, index: number) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weathercode[index],
      maxTemp: Math.round(daily.temperature_2m_max[index]),
    }
  })
}

const parseHourlyWeather = ({ hourly, current_weather }: All_Weather) => {
  return hourly.time
    .map((time, index) => {
      return {
        timestamp: time * 1000,
        iconCode: hourly.weathercode[index],
        temp: Math.round(hourly.temperature_2m[index]),
        feelsLike: Math.round(hourly.apparent_temperature[index]),
        windSpeed: Math.round(hourly.windspeed_10m[index]),
        precip: Math.round(hourly.precipitation[index] * 1000) / 100,
      }
    })
    .filter(({ timestamp }) => timestamp >= current_weather.time * 1000)
}

export const load: PageLoad = async ({ fetch }) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const res = await fetch(
    URL + '&latitude=35.0526&longitude=-83.1968&timezone=' + timezone
  )
  const data = await res.json()

  return {
    current: parseCurrentWeather(data),
    daily: parseDailyWeather(data),
    hourly: parseHourlyWeather(data),
  }
}

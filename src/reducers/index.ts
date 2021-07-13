import {WeatherAction, WeatherActionTypes, WeatherState} from "../types/weather";


const initialState: WeatherState = {
    weatherData: [],
    loading: false,
    error: false
}

export const reducer = (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.WEATHER_LOADED:
            return {
                ...state,
                weatherData: action.payload
            };
        case WeatherActionTypes.WEATHER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case WeatherActionTypes.WEATHER_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export type allState = ReturnType<typeof reducer>;
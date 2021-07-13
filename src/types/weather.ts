export enum WeatherActionTypes {
    WEATHER_REQUESTED = 'WEATHER_REQUESTED',
    WEATHER_ERROR = 'WEATHER_ERROR',
    WEATHER_LOADED = 'WEATHER_LOADED'
}

interface WeatherRequestedAction {
    type: WeatherActionTypes.WEATHER_REQUESTED;
}

interface WeatherLoadedAction {
    type: WeatherActionTypes.WEATHER_LOADED;
    payload: any[];
}

interface WeatherErrorAction {
    type: WeatherActionTypes.WEATHER_ERROR;
}

export type WeatherAction = WeatherRequestedAction | WeatherLoadedAction | WeatherErrorAction;

export interface WeatherState {
    weatherData: any[];
    loading: boolean;
    error: boolean;
}
import { Dispatch } from 'react';
import { FlightsActionTypes, FlightsAction } from '../../types/flights';



const API_URL = "https://api.iev.aero/api/flights/"

export async function fetchFlights (dispatch: Dispatch<FlightsAction>, date: string) {
    try{
            dispatch({type:FlightsActionTypes.FETCH_FLIGHTS})
            const selectedDate = new Date(date)

            const selectedDay = selectedDate.getDate()
            const selectedMonth = selectedDate.getMonth() + 1
            const selectedYear = selectedDate.getFullYear()

            const response = await fetch(`${API_URL}${selectedDay}.${selectedMonth}.${selectedYear}`)
            const res = await response.json();

            const arrival = res.body.arrival;
            const departure = res.body.departure;
        
            console.log(`${API_URL}${selectedDay}.${selectedMonth}.${selectedYear}`)

            dispatch({type:FlightsActionTypes.FETCH_FLIGHTS_SUCCESS, payload: res.body})
        }catch(e){
            dispatch({type:FlightsActionTypes.FETCH_FLIGHTS_ERROR, payload: `${e}`})
            console.log(e)
        }
}
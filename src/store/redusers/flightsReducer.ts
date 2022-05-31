import { FlightsAction } from '../../types/flights';
import { flightsState } from "../../types/flights"
import { FlightsActionTypes } from "../../types/flights"

const defaultState: flightsState = {
    flights: {
        arrival: [],
        departure: []
    },
    loading: false,
    error: null
}

export const flightsReducer = (state: flightsState = defaultState, actions: FlightsAction): flightsState => {
    switch (actions.type){
        case FlightsActionTypes.FETCH_FLIGHTS:
            return {loading: true, error: null, flights: {arrival: [], departure: []}}

        case FlightsActionTypes.FETCH_FLIGHTS_SUCCESS:
            return {loading: false, error: null, flights: actions.payload}

        case FlightsActionTypes.FETCH_FLIGHTS_ERROR:
            return {loading: false, error: actions.payload, flights: {arrival: [], departure: []}}

        default:
            return state
    }
}
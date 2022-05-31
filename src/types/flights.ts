export interface arrival {
    ID: string,
    actual: string,
    airline: {
        ua: {
            name : string
        }
    }
    fltNo: string,
    ["airportFromID.name"]: string,
    status: string
}

interface departure {
    ID: string,
    actual: string,
    airline: {
        ua: {
            name : string
        }
    }
    fltNo: string,
    ["airportToID.name"]: string,
    status: string
}
export interface flightsState{
    flights: {
       arrival: arrival[],
       departure: departure[]
    },
    loading: boolean,
    error: null | string

}
export enum FlightsActionTypes{
    FETCH_FLIGHTS = "FETCH_FLIGHTS",
    FETCH_FLIGHTS_SUCCESS = "FETCH_FLIGHTS_SUCCESS",
    FETCH_FLIGHTS_ERROR = "FETCH_FLIGHTS_ERROR"
}

interface FetchFlightsAction{
    type:FlightsActionTypes.FETCH_FLIGHTS,
    
}

interface FetchFlightsSuccessAction{
    type: FlightsActionTypes.FETCH_FLIGHTS_SUCCESS,
    payload: {arrival: [], departure: []}
}

interface FetchFlightsErrorAction{
    type: FlightsActionTypes.FETCH_FLIGHTS_ERROR,
    payload: string
}

export type FlightsAction = FetchFlightsAction | FetchFlightsErrorAction | FetchFlightsSuccessAction
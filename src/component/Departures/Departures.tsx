import React, { useEffect } from "react";
import { useTypesSelector } from "../../hooks/useTypedSelecor";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { fetchFlights } from "../../store/actions-creators/flights";

export const Departures = () => {
    const {error, flights, loading} = useTypesSelector(state => state.flights)
    const date = useTypesSelector(state => state.date.date)
    const search = useTypesSelector(state => state.search.search)

    const dispatch = useDispatch()

    const arrivalfiltred = useMemo(()=>{
        return flights.departure.filter((item)=>{
            return item["airportToID.name"].toLowerCase().includes(search.toLowerCase()) 
            || item.fltNo.includes(search)
        })
    }, [search, flights.arrival]) 

    useEffect(() => {
        fetchFlights(dispatch, date)
    }, [])

    useEffect(()=>{
        fetchFlights(dispatch, date)
    }, [date])

    if(loading){
        return (
            <h1> loading... </h1>
        )
    }
    if(error){
        return(
            <h1>{error}</h1>
        )
    }
    if(flights.arrival[0] == undefined){
        return(
            <h1>not exist</h1>
        )
    }

    return(
        <>
            <div className="Departures">
                <ul>
                {arrivalfiltred.map(item => {
                    return (
                        <li key={item.ID}>
                            <div>{item.fltNo}</div>
                            <div>{item.actual}</div>
                            <div>{item.airline.ua.name}</div>
                            <div>{item["airportToID.name"]}</div>
                            <div>{item.status}</div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}
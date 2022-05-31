import React, { useMemo } from "react";
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFlights } from '../../store/actions-creators/flights';
import { useTypesSelector } from '../../hooks/useTypedSelecor';

export const Arrival: React.FC = () => {
    const {error, flights, loading} = useTypesSelector(state => state.flights)
    const date = useTypesSelector(state => state.date.date)
    const search = useTypesSelector(state => state.search.search)

    const dispatch = useDispatch()

    const arrivalfiltred = useMemo(()=>{
        return flights.arrival.filter((item)=>{
            return item["airportFromID.name"].toLowerCase().includes(search.toLowerCase()) 
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
            <div className="Arrival">
                <ul>
                {arrivalfiltred.map(item => {
                    return (
                        <li key={item.ID}>
                            <div>{item.fltNo}</div>
                            <div>{item.actual}</div>
                            <div>{item.airline.ua.name}</div>
                            <div>{item["airportFromID.name"]}</div>
                            <div>{item.status}</div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

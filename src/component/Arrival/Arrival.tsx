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
            <div className="List">
                <div className="List_message">
                    <h1> loading... </h1>
                </div>
            </div>
        )
    }
    if(error){
        return(
            <div className="List">
                <div className="List_message">
                <h1>{error}</h1>
                </div>
            </div>
        )
    }
    if(flights.arrival[0] == undefined){
        return(
            <div className="List">
                <div className="List_message">
                    <h1>not exist</h1>
                    <p>change the date</p>
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="Arrival List">
                <ul className="List__ul">
                {arrivalfiltred.map(item => {
                    return (
                        <li key={item.ID} className="List__li">
                            <div className="List__fltNo">Номер рейсу: {item.fltNo}</div>
                            <div className="List__time">Час: {new Date(item.actual).getHours()+":"+new Date(item.actual).getMinutes()}</div>
                            <div className="List__nameCompani">Компанія: {item.airline.ua.name}</div>
                            <div className="List__city">Напрямок: {item["airportFromID.name"]}</div>
                            <div className="List__Status">Статус: {item.status}</div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

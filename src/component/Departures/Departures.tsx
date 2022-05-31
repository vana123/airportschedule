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
    if(flights.departure[0] == undefined){
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
            <div className="Departures List">
                <ul className="List__ul">
                {arrivalfiltred.map(item => {
                    return (
                        <li key={item.ID} className="List__li">
                            <div className="List__fltNo">Номер рейсу: {item.fltNo}</div>
                            <div className="List__time">Час: {item.actual}</div>
                            <div className="List__nameCompani">Компанія: {item.airline.ua.name}</div>
                            <div className="List__city">Напрямок: {item["airportToID.name"]}</div>
                            <div className="List__Status">Статус: {item.status}</div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}
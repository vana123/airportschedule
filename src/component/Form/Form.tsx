import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from '../../hooks/useTypedSelecor';
import React from 'react';
import { NavLink } from "react-router-dom";

export const Form: React.FC = () => {
    const dispatch = useDispatch()
    const date = useTypesSelector(state => state.date.date)
    const search = useTypesSelector(state => state.search.search)

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "SET_DATE", payload: event.target.value})
        dispatch({type: "SET_SEARCH", payload: ""})      
    }

    const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch({type: "SET_SEARCH", payload: event.target.value})
    }

    useEffect(()=>{
       
    }, [date])

    return(
        <div className="Form">
            <input
                type="date"
                value = {date}
                onChange = {dateChangeHandler}/>

            <input
                type="text"
                value={search}
                onChange={searchChangeHandler}
            />
        <NavLink  to="/arrival">arrival</NavLink>
        <NavLink  to="/departures">departures</NavLink>
        </div>
    )
}
import React from "react";
import { Form } from "./component/Form/Form";
import { Arrival } from './component/Arrival/Arrival';
import { Departures } from './component/Departures/Departures';

export const App = () => {
    return(
        <div className="App">
            <Form/>
            <Arrival/>
            <Departures/>
        </div>
    )
}
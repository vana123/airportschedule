import React from "react";
import { Form } from "./component/Form/Form";
import { Arrival } from './component/Arrival/Arrival';
import { Departures } from './component/Departures/Departures';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ArrivalPage } from "./pages/ArrivalPage";
import { DeparturesPage } from './pages/DeparturesPage';

export const App = () => {
    return(
        <BrowserRouter>
            <div className="App">
                <Form/>
                <Routes>
                    <Route path="/arrival" element={<ArrivalPage/>} />
                    <Route path="/departures" element={<DeparturesPage/>} />
                </Routes>
                {/* <Arrival/>
                <Departures/> */}
            </div>
        </BrowserRouter>
    )
}
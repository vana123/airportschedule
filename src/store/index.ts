import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dateReducer } from "./redusers/dateReducer";
import { flightsReducer } from './redusers/flightsReducer';
import { searchReducer } from './redusers/searchreducer';

const rootReducer = combineReducers({
    date: dateReducer,
    flights: flightsReducer,
    search: searchReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
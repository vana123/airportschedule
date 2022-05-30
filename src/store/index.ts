import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { dateReducer } from "./redusers/dateReducer";

const rootReducer = combineReducers({
    date: dateReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
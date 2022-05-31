interface dataState {
    date: string
}

interface dataAction{
    type:string
    payload: string
}

const defaultDate: dataState = {
    date: "2021-07-21"
}

export const dateReducer = (state = defaultDate, action: dataAction): dataState => {
    switch(action.type){
        case "SET_DATE":
            return{...state, date: action.payload}
        default:
            return state
    }
}
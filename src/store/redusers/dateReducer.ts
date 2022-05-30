interface dataState {
    date: string
}

interface dataAction{
    type:string
    payload?:any
}

const defaultDate: dataState = {
    date: "2018-07-22"
}

const SET_DATE = "SET_DATE"

export const dateReducer = (state = defaultDate, action: dataAction): dataState => {
    switch(action.type){
        case SET_DATE:
            return{...state, date: action.payload}


        default:
            return state
    }
}
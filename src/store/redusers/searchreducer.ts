interface searchState {
    search: string
}

interface searchAction{
    type:string
    payload: string
}

const defaultSearch: searchState = {
    search: ""
}

export const searchReducer = (state = defaultSearch, action: searchAction): searchState => {
    switch(action.type){
        case "SET_SEARCH":
            return{...state, search: action.payload}
        default:
            return state
    }
}
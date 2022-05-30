import { useDispatch } from "react-redux";
import { useTypesSelector } from '../../hooks/useTypedSelecor';

export const Form: React.FC = () => {
    const dispatch = useDispatch()
    const date = useTypesSelector(state => state.date.date)

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "SET_DATE", payload: event.target.value})
        console.log(event.target.value)
    }

    return(
        <div className="Form">
            <input
                type="date"
                value = {date}
                onChange = {dateChangeHandler}/>
        </div>
    )
}
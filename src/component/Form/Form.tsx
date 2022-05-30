import React from "react";
import { useTypesSelector } from '../../hooks/useTypedSelecor';


export const Form: React.FC = () => {
    const date = useTypesSelector(state => state.date.date)

    return(
        <div className="Form">
            {date}
        </div>
    )
}
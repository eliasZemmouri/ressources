import { useContext } from "react";
import {Context as contextButton} from 'Contexts/myContext';
const BadButton = ()=>{
    const {increaseBad} = useContext(contextButton);
    return(
        <button onClick={increaseBad}> increase bad</button>
    )
}

export default BadButton;
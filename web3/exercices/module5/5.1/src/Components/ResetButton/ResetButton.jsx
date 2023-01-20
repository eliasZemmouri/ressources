import { useContext } from "react";
import {Context as contextButton} from 'Contexts/myContext';
const ResetButton = ()=>{
    const {resetAll} = useContext(contextButton);
    return(
        <button onClick={resetAll}> reset all</button>
    )
}

export default ResetButton;
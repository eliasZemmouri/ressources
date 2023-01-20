import { useContext } from "react";
import {Context as contextButton} from 'Contexts/myContext';

const OkButton = ()=>{
    const {increaseOk} = useContext(contextButton)
    return(
        <button onClick={increaseOk}>  increase ok</button>
    )
}

export default OkButton;
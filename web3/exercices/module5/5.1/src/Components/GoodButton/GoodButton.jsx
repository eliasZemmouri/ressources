import { useContext } from "react";
import {Context as contextButton} from 'Contexts/myContext';
const GoodButton = ()=>{
    const {increaseGood} = useContext(contextButton);
    return(
        <button onClick={increaseGood}> increase good</button>
    )
}

export default GoodButton;
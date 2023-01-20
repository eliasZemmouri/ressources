import { Context } from "contexts/CountersContext";
import { useContext } from "react";
const BadButton = ()=>{
    const {increaseBad, increBad} = useContext(Context);
    return (
        <p> OK :{increaseBad} <button onClick={increBad}>increase bad</button> </p>
    )
}
export default BadButton;
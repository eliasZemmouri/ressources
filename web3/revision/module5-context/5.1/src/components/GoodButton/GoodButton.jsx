import { Context } from "contexts/CountersContext";
import { useContext } from "react";
const GoodButton = ()=>{
    const {increaseGood, increGood} = useContext(Context);
    return (
        <p> Good :{increaseGood} <button onClick={increGood}>increase good</button> </p>
    )
}

export default GoodButton;
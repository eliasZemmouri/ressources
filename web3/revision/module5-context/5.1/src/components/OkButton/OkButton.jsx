import { Context } from "contexts/CountersContext";
import { useContext } from "react";

const OkButton = ()=>{
    const {increaseOk, increOk} = useContext(Context);
    return (
        <p> OK :{increaseOk} <button onClick={increOk}>increase ok</button> </p>
    )
}

export default OkButton;
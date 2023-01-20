import { Context } from "contexts/CountersContext";
import { useContext } from "react";
const Reset = ()=>{
    const {resetAll} = useContext(Context);
    return (
        <p>  <button onClick={resetAll}>reset all</button> </p>
    )
}
export default Reset;
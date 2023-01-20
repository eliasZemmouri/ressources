
import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    const [increaseGood,setIncreaseGood] = useState(0);
    const [increaseOk,setIncreaseOk] = useState(0);
    const [increaseBad,setIncreaseBad] = useState(0);

    const resetAll = ()=>{
        setIncreaseBad(0);
        setIncreaseGood(0);
        setIncreaseOk(0);
    }
    const increGood = ()=>{
        setIncreaseGood(increaseGood+1);
    }
    const increOk = ()=>{
        setIncreaseOk(increaseOk+1);
    }
    const increBad = ()=>{
        setIncreaseBad(increaseBad+1);
    }
   
    
    const exposedValue = {
        increaseGood,
        increaseOk,
        increaseBad,
        increGood,
        increOk,
        increBad,
        resetAll,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    

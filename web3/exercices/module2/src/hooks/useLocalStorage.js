const { useState } = require("react");

function getValue(key,defaultValue){
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue
}

function useLocalStorage(key,initialValue){
    let value = getValue(key,initialValue);
    const [counter,setCounter] = useState(value);
    
    const modifyCounter = (newValue)=>{
        localStorage.setItem(key, JSON.stringify(newValue));
        setCounter(newValue);
    }

    return [counter,modifyCounter];
    
}

export default useLocalStorage;
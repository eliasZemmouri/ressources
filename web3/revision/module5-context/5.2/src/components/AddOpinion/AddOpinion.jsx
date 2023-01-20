import { useState,useContext } from "react"
import { v4 as uuid } from 'uuid';
import { Context } from "contexts/OpinionContext";
const AddOpinion = ()=>{
    const [name,setName] = useState("");
    const {addOpinion,vote} = useContext(Context);
    
    const onchange =(value)=>{
        setName(value.target.value);
    }
    const send = ()=>{
        const opinion = {
            title: name,
            votes:1,
            id:uuid()
        }
        addOpinion(opinion)
    }
    return(
        <div>
            <input type={'text'} onChange={(value)=>{onchange(value)}} />
            <button onClick={send}> Add opinion</button>
        </div>
    )
}

export default AddOpinion;
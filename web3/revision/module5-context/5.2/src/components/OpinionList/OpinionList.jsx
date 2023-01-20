import { useContext } from "react"
import { Context } from "contexts/OpinionContext"

const OpinionList = ()=>{
    const {listOpinion,vote} = useContext(Context);
    console.log(listOpinion);
    return (
        <ul>

        {listOpinion.map(op => <li key={op.id}> {op.title} : {op.votes} <button onClick={()=>vote(op.id)}> vote</button></li> )}
    </ul>
    )
}

export default OpinionList;

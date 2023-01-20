import React, { useState } from "react";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {
    const tab = [
        {
            title:"test",
            id:"122",
            votes:1
        }
    ]
    const [listOpinion,setListOpinion] = useState(tab);

    const addOpinion = (opinion) =>{  
        const list = listOpinion.concat(opinion);
        list.sort((a,b)=> b.votes-a.votes)
        //list.push(opinion);    
        setListOpinion(list);
     
    }
    const vote = (id)=>{
       let opinions = [...listOpinion];
       const opinion = opinions.find(op => op.id===id);
       opinion.votes += 1;
        //let list = listOpinion.map(op => op.id===id ? op.votes = op.votes+1 : op)
        opinions.sort((a,b)=> b.votes-a.votes)
        setListOpinion(opinions);
    }

    const exposedValue = {
        listOpinion,
        addOpinion,
        vote,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}    

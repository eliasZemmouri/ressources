import { useState } from "react";

const Loading = (props)=>{
    
    const [loading, setLoading ] = useState(true);

    setTimeout(props.loading,3000);

    return(
        <p>Chargement en cours...</p>
    )
}

export default Loading;
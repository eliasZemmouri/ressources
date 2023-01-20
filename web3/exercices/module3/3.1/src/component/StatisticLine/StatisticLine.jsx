const StatisticLine = (props)=>{

    const {text,value} = props;
    return(
        <p>{text} {value}</p>
    )
    
}

export default StatisticLine;
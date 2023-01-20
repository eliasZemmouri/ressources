import StatisticLine from "component/StatisticLine/StatisticLine";

const Statistics = (props)=>{
    const {good,neutral,bad,all} = props;

    if(all===0){
        return (
            <p>No feedback given</p>
        )
    }
    
    return (
        <div>
            <h2>Statistics</h2>
            <table>
            <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
                <tbody>
                    <tr>
                        <td><StatisticLine text={"Good"} value={good}></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text={"neutral"} value={neutral}></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text={"bad"} value={bad}></StatisticLine></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text="all" value={all}></StatisticLine></td>
                    </tr>
                </tbody>                           
            </table>

            
        </div>
    )

}

export default Statistics;
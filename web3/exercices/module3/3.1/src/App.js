import Button from 'component/Button/Button'
import Statistics from 'component/Statistics/Statistics'
import { useState } from 'react'
import Loading from 'component/Loading/Loading'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [loading, setLoading ] = useState(true);

  const goodHandler = ()=>{
    setGood(good+1);
  }
  const neutralHandler = ()=>{
    setNeutral(neutral+1);
  }
  const badHandler = ()=>{
    setBad(bad+1);
  }
  const loadingHandler = ()=>{ 
    setLoading(false)
  }
  
  if(loading){
    return(
      <Loading loading={loadingHandler}></Loading>
    )
  }
  return (
    <div>
        
        <h2> Give feedback</h2>
        <Button onClick={goodHandler} text={"good"}></Button>
        <Button onClick={neutralHandler} text={"neutral"}></Button>
        <Button onClick={badHandler} text={"bad"}></Button>

        <Statistics good={good} neutral={neutral} bad={bad} all={good+neutral+bad}></Statistics>
        

    </div>
  )
}

export default App

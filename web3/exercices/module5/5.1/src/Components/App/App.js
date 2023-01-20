import {  useContext } from "react";
import './App.css';
import GoodButton from 'Components/GoodButton/GoodButton'
import { Context as contextButton} from 'Contexts/myContext'
import BadButton from "Components/BadButton/BadButton";
import OkButton from "Components/OkButton/OkButton";
import ResetButton from "Components/ResetButton/ResetButton";
function App() {
  const { good,bad,ok } = useContext(contextButton)
  return (
    <div className="App">
      <div className='btnSection'> <p>Good : {good}</p> <GoodButton/> </div>
      <div className='btnSection'> <p>Ok : {ok}</p> <OkButton/></div>
      <div className='btnSection'> <p>Bad :{bad} </p> <BadButton/></div>
      <ResetButton/>
    </div>
  );
}

export default App;

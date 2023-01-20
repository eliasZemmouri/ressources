import './App.css';
import Display from 'components/Display/Display';
import Button from 'components/Button/Button';
import useLocolStorage from 'hooks/useLocalStorage'


const App = () => {
  //const [ counter,setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))

  const [number,setNumber] = useLocolStorage("num",0);

  const changeCount = (delta)=>{
    /*
    setCounter(counter+delta);
    localStorage.setItem("counter", JSON.stringify(counter))
    */
   setNumber(number+delta);
  }
  
  return (
    <div>
      <Display counter={number}/>
      <Button text = {"increas"} onClick={changeCount} delta={1} />
      <Button text={"decrease"} onClick={changeCount} delta={-1}/>
      <Button text={"reset"} onClick={changeCount} delta={-number}/>
    </div>
  )
}

export default App;

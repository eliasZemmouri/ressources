import logo from './logo.svg';
import './App.css';


const Hello = (props)=>{
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name='Basil' age={10+12}/>
      <Hello name='Eric'/>
      
    </>
  )
}

export default App;

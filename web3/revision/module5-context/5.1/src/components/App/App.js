
import './App.css';
import OkButton from 'components/OkButton/OkButton';
import GoodButton from 'components/GoodButton/GoodButton';
import BadButton from 'components/BadButton/BadButton';
import Reset from 'components/Reset/Reset';
function App() {
  return (
    <div className="App">
      <GoodButton/>
      <OkButton/>
      <BadButton/>
      <Reset/>
    </div>
  );
}

export default App;

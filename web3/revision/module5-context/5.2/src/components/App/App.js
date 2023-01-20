
import './App.css';
import AddOpinion from 'components/AddOpinion/AddOpinion';
import OpinionList from 'components/OpinionList/OpinionList';

function App() {
  return (
    <div className="App">
      <OpinionList/>
      <AddOpinion/>
    </div>
  );
}

export default App;

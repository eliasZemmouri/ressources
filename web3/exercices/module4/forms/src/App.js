import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { id:1,name: 'Arto Hellas',number:'12344' }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('');

  const newNameHandler = (event)=>{
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const phoneNumberHandler = (event)=>{
    setPhoneNumber(event.target.value);
  }

  const addNewName = (event)=>{
    event.preventDefault();
    if(!verifieNewName(newName)){
      const name = {d:persons.length+1,name:newName,number:phoneNumber};
      setPersons(persons.concat(name));
      console.log(persons)
      setNewName('');
      setPhoneNumber('');
    }else{
      alert(`${newName} is already added to phonebook`)
    }
    
  }
  const verifieNewName = (name)=>{
    let contains = false;
    persons.forEach(persone => {
      if(persone.name===name){
        contains=true;
        return;
      }  
    });
    return contains;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={newNameHandler} value={newName} placeholder={"votre nom"}/><br/>
          number: <input onChange={phoneNumberHandler} value={phoneNumber} placeholder={"votre numero"}/>
        </div>
        <div>
          <button type="submit" onClick={addNewName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}> {person.name} : {person.number}</p>)}
    </div>
  )
}

export default App
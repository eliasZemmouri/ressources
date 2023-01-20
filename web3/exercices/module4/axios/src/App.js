import { useState,useEffect } from 'react'
import axios from 'axios'
import serviceContact from './services/Contact'

const App = () => {

  const [persons, setPersons] = useState([])
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
      const name = {name:newName,number:phoneNumber};

      serviceContact.create(name).then(
        returnedContact =>{
          setPersons(persons.concat(returnedContact));
          setNewName('');
          setPhoneNumber('');
        }
      ).catch(error => {
        console.log('fail')
      })  
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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data))
      })
  }, [])

  
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
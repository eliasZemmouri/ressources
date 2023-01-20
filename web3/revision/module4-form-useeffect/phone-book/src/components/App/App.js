import { useState,useEffect } from 'react'
import AddContact from 'components/AddContact/AddContact'
import ListContact from 'components/ListContact/ListContact'
import axios from 'axios'

import ContactService from 'services/ContactService'

const App = () => {
  const [persons, setPersons] = useState([
  ])

  useEffect(()=>{
    console.log('effect')
    ContactService.getAll()
    .then(response => setPersons(response))
  },[])
  console.log('render ',persons.length,"person");
  
 
  const addNewName = (contact)=>{
    if(persons.find(p => p.name===contact.name)){
      alert(`${contact.name} is already added to phonebook`)
      return
    }
    ContactService.create(contact)
    .then(contactAdded => setPersons(persons.concat(contactAdded)))

  }

  return (
    <div>
      <AddContact addNewName={addNewName}/>
      <ListContact contacts={persons}/>
    </div>
  )
}

export default App
import { useState } from "react";
const AddContact = ({addNewName}) => {

    const [newName, setNewName] = useState('')
    const [number,setNumber] = useState('');
  
    const handelNumber = (event)=>{
      setNumber(event.target.value);
    }
  
    const handelInput = (event)=>{
      setNewName(event.target.value);
    }
  

    const handelForm = (event)=>{
        event.preventDefault();
        addNewName({name:newName,number:number});
    }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handelForm}>
        <div>
          name: <input value={newName} onChange={handelInput} />
        </div>
        <div>
          number: <input value={number} onChange={handelNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
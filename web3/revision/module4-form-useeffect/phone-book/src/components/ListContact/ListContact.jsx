import Contact from "components/Contact/Contact";

const ListContact = (props) => {
    console.log(props.contacts)
  return (
    <div>
      <h2>Numbers</h2>
      {props.contacts.map(contact => <Contact key={contact.name} contact={contact} />)}
    </div>
  );
};

export default ListContact;
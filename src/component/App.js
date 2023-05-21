import React, {useState ,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
const LOCAL_KEY = "Contacts";
const [contacts , setcontacts ] = useState([]);

const addEventHandler = (contact) =>{
  setcontacts([...contacts , contact ]);
 };

useEffect(()=>{
  window.localStorage.setItem(LOCAL_KEY , JSON.stringify(contacts));
  
},[contacts]);

useEffect(() => {
const getvalues = JSON.parse(window.localStorage.getItem(LOCAL_KEY));
console.log(getvalues);

},[]);





  return (
    <div className='ui container '>
    <Header />
    <AddContact addEventHandler={addEventHandler} />
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;

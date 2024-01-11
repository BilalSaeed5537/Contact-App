import './App.css';
import Navbar from './Components/Navbar';
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from 'react';

import { collection,  onSnapshot } from 'firebase/firestore'
import { db } from '../src/Components/Config/firebase'

import Contactcards from './Components/Contactcards';
import AddandupdateContact from './Components/AddandupdateContact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactNotfound from './Components/ContactNotfound';
import { Button } from 'react-bootstrap';






function App() {





  const [contacts, setContacts] = useState([]);

  const [isopen, setIsopen] = useState(false);
  

  const onopen = () =>{

    setIsopen(true);
  }

  const onclose = () =>{

    setIsopen(false);
  }


  const filterContact = (e)=>{
    const value = e.target.value;

    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef,(snapshot)=>{
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });


      const filteredContact = contactList.filter((contact)=>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
      setContacts(filteredContact);
      return (filteredContact);

    })
  }





  useEffect(() => {


    const getsContacts = async () => {
      try {

        const contactRef = collection(db, "contacts");

        onSnapshot(contactRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })
          setContacts(contactList);
          return (contactList);

        })

       
      } catch (error) {
      }
    }
    getsContacts();
  }, []);




  return (
    <>
    <div className='header' style={{ maxWidth: "370px", margin: " auto" }}>

      <Navbar />

      <div className='d-flex flex-column gap-2'>
        <div className='d-flex position-relative flex-grow-1 align-items-center'>

          <FiSearch className='text-white fs-2 position-absolute mx-1' />
          <input
            onChange={filterContact}

            type='text'
            className='bg-transparent flex-grow-1  bg-white border-white rounded text-white fs-4'
            style={{ height: "40px", paddingLeft: "40px" }}
          />

        </div>

        <Button  className='my-2' onClick={onopen} style={{backgroundColor: "#F6820C", border: "none"}}>Add Contact</Button>
        {/* <FaCirclePlus onClick={onopen} className='text-white' style={{cursor: "pointer", fontSize: 35 }} /> */}
      </div>

      <div className=" my-2 d-flex flex-column gap-2"  >
        {contacts.length<=0? <ContactNotfound />: contacts.map((contact) => (
          <Contactcards key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>

    <AddandupdateContact isopen={isopen} onclose={onclose} />
    <ToastContainer position='bottom-center' />

    </>
  );
}

export default App;

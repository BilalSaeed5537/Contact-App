import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import {db} from './Config/firebase'
import {collection,deleteDoc,doc} from 'firebase/firestore'
import AddandupdateContact from './AddandupdateContact';
import UseDisclosure from '../Customhook/UseDisclosure';
import { toast } from 'react-toastify';


const Contactcards = ({ contact }) => {

    const {isopen, onopen, onclose} = UseDisclosure();


    const deletecontact = async(id) =>{
        try {

            const contactRef = collection (db, 'contacts')
            await deleteDoc(doc(contactRef,  id));
            toast.success("Contact Deleted Successfully")
            console.log(`your contact deleted successfully with id ${id}`);
            



            
        }
         catch (error) {
            console.log(`your error is ${error}`)
        }
    }



    return (
        <div className='d-flex align-items-center justify-content-between rounded p-2 ' style={{ color: "#F6820C", backgroundColor: "#FFEAAE" }} key={contact.id}>
        <div className='d-flex  gap-2 mt-2' >
            <HiOutlineUserCircle  className='' style={{ fontSize: "40px" }} />
            <div className='text-dark'>
                <h4 className='name-style'>{contact.name}</h4>
                <p className='email-style'>{contact.email}</p>
            </div>
        </div>
        <div className='d-flex  ' style={{ fontSize: "35px", marginLeft: "auto" }}>
            <TbEditCircle style={{ color: "black", cursor: "Pointer" }} onClick={onopen} />
            <MdDelete onClick={()=> deletecontact(contact.id)} style={{ color: "#F6820C", cursor: "Pointer" }} />
        </div>

        <AddandupdateContact contact={contact} isupdate isopen={isopen} onclose={onclose} />
    </div>

    )
}

export default Contactcards

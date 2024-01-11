import React from 'react';
import Model from './Model';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { db } from './Config/firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from 'yup';


const contactSchemaValidation = Yup.object().shape({
    name : Yup.string().required('Name is Required'),
    email : Yup.string().email('Invalid Email').required('Email is Required')
})


const AddandupdateContact = ({ isopen, onclose, isupdate, contact }) => {




    const addcontact = async (values) => {
        try {

            const contactRef = collection(db, 'contacts')
            await addDoc(contactRef, values);
            onclose();
            toast.success("Contact Added Successfully")
        }
        catch (error) {
            console.log(error)
        }
    }

    const Updatecontact = async (values, id) => {
        try {

            const contactRef = doc(db, 'contacts', id)
            await updateDoc(contactRef, values);
            onclose();
            toast.success("Contact Updated Successfully")
        }
        catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <Model isopen={isopen} onclose={onclose}>

                <Formik
                validationSchema={contactSchemaValidation}
                 initialValues={isupdate ? {

                    name: contact.name,
                    email: contact.email
                }

                    : {
                        name: "",
                        email: ""
                    }}
                    onSubmit={(values) => {
                        isupdate? Updatecontact(values, contact.id):
                        addcontact(values);
                    }}
                >
                    <Form className='d-flex flex-column gap-3'>
                        <div className='d-flex flex-column gap-1'>
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="" style={{ height: "40px" }}/>
                            <div className='text-danger fs-6'>
                                <ErrorMessage name="name" />

                            </div>
                        </div>
                        <div className='d-flex flex-column gap-1'>
                            <label htmlFor="name">Email</label>
                            <Field type="email" name="email" className="" style={{ height: "40px" }}  />
                            <div className='text-danger fs-6'>
                                <ErrorMessage name="email" />

                            </div>
                        </div>

                        <Button type='submit' style={{
                            backgroundColor: "#F6820C",
                            border: "none"
                        }} className='px-3 py-2 align-self-end'>{isupdate ? "Update" : "Add"} Contact</Button>
                    </Form>
                </Formik></Model>


        </div>
    )
}

export default AddandupdateContact

import React from 'react'
import image2 from '../images/image2.png'

const ContactNotfound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{height : "70vh"}} >
      <img src={image2} alt="" />
      <h3 className='text-white fw-semibold'>Contact Not Found</h3>
    </div>
  )
}

export default ContactNotfound

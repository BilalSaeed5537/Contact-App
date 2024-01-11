import React from 'react';
import image1 from '../images/image1.svg'


function Navbar() {
  return (
    <div className=" nav-style bg-white rounded my-4 d-flex justify-content-center align-items-center gap-3 "

      style={{ height: '70px' }}>



      <img src={image1} alt="" />
      <h4>Firebase Contact App</h4>



    </div>
  )
}

export default Navbar

import { useState } from 'react'


const UseDisclosure = () => {


    const [isopen, setIsopen] = useState(false);
  

  const onopen = () =>{

    setIsopen(true);
  }

  const onclose = () =>{

    setIsopen(false);
  }


  return (
    {isopen, onopen, onclose}
  )
}

export default UseDisclosure

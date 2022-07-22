
import axios from 'axios'
import React, { createContext,useEffect, useState } from 'react'

export const BagContext = createContext()


export const BagContextProvider = ({children}) => {

    const [cartLength, setCartLength] = useState([])

    useEffect(() =>{
    
    axios.get(`https://yoox-server.herokuapp.com/bag`)
    .then((res)=>{
        setCartLength(res.data)
        console.log(res.data, "context")
    })
},[])


console.log(cartLength.length)
  return (
    <div>
        <BagContext.Provider value = {{cartLength}}>
            {children}
        </BagContext.Provider>
    </div>
  )
}

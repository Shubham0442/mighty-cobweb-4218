
import axios from 'axios'
import React, { createContext, useState, useEffect} from 'react'

export const BagContext = createContext()


export const BagContextProvider = ({children}) => {

    const [cartLength, setCartLength] = useState([])
    const [total, setTotal] = useState(0)


    const handleCartLength = ()=>{
      axios.get(`https://yoox-server.onrender.com/bag`)
      .then((res)=>{
          setCartLength(res.data)
          //console.log(res.data, "context")    
      })
    }

    useEffect(()=>{
      handleCartLength()
    },[])

    const calculateTotal = (cartLength) =>{
      let newTotal = cartLength.reduce((acc, p) => acc + (p.price), 0)
      setTotal(newTotal)
   } 

   useEffect(()=>{
    calculateTotal(cartLength)

  },[cartLength])

  //console.log(cartLength.length)
  return (
    <div>
        <BagContext.Provider value = {{cartLength, setCartLength, handleCartLength, total }}>
            {children}
        </BagContext.Provider>
    </div>
  )
}

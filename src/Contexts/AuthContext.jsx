import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const initState = {
    isAuth: false,
    token: null
}



const AuthContextProvider = ({children}) => {

    const [state, setState] = useState(initState)

    const HandleLoginContext = (token) =>{
        setState({
            ...setState,
            isAuth : true,
            token : token
        })
    }

    const HandleLogoutContext = () =>{
        setState({
            ...setState,
            isAuth : false,
            token : null
        })
    }


  return (
    <div>
        <AuthContext.Provider value = {{state, HandleLoginContext, HandleLogoutContext}}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
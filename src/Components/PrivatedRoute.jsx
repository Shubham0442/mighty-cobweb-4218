import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from "react-router-dom";

const PrivatedRoute = ({children}) => {
  
 const {state} = useContext(AuthContext)

    if (state.isAuth === false) {
        return <Navigate to="/register" />;
      } else {
        return children;
      }

}

export default PrivatedRoute
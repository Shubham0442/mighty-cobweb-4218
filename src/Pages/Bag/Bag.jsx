import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MainNavbar from '../../Components/MainNavbar'
import { BagContext } from '../../Contexts/BagContext'
import { Button } from '@chakra-ui/react'
import style from "./bag.module.css"

const Bag = () => {
   
  const {BagData} = useContext(BagContext)

  return (
    <div>
        <MainNavbar/>
         <div className={style.bagHeaderDiv}>
             <h1>SHOPPING BAG</h1>
             <div>
             <h2>
              <Link to="/men">
                 BACK TO SHOPPING
              </Link>
              </h2>
              <Button>PROCEED WITH YOUR ORDER</Button>
             </div>
         </div>
         <div className={style.bagHeaderShowDiv}></div>
    </div>
  )
}

export default Bag
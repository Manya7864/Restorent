import React from 'react'
import Newresto from './Newresto'
const Restaurent1 = ({restaurent}) => {
  return (
    <div className="container divider">
            <div className="cards">
            {restaurent.map((el)=>{
                return(
                <Newresto key={el.id} el={el}/>
                )
            })}
           
               
               
            </div>
        </div>


  )
}

export default Restaurent1
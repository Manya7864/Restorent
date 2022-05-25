import React from 'react'


const Offers = ({offers}) => {
  return (
    <section className="offers">
    
        <div className="container">
       
        {offers.map((offerss)=>{
          return (<img className="offer" src={offerss}/>)

       })}
           
        </div>
    </section>
  )
}

export default Offers
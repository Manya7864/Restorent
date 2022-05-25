
import './App.css';
import Filter from './component/Filter';
import Navbar from './component/Navbar';
import Offers from './component/Offers';
import Restaurent1 from './component/Restaurent1';
import userinfo from '../src/data/userinfo.json'
import offers  from '../src/data/offer.json';
import restaurent from '../src/data/resto.json'
import { useState } from 'react';


const filter1={
  1:" Cost High to Lost",
  2:" Cost Lost to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance"
}
function App() {
const [filterBy,setFilterBy]=useState("")
const [data,setData]=useState(restaurent)

const updatefilter=(newFilter)=>{
  switch(newFilter){
    case "1":{
      setFilterBy(1)
      data.sort((a,b)=>b.costforatawo-a.costforatawo)
     
      setData([...data])
      break;
    }
    case "2":{
      setFilterBy(2)
      data.sort((a,b)=>a.costforatawo-b.costforatawo)
      console.log(data.map((d)=>d.costforatawo))
      setData([...data])
      break;
    }
    default:{
      setData(restaurent)
      break;
    }

  }
  
}





  return (
    <div>
      <Navbar {...userinfo.location}/>
      <Offers offers={offers}/>
      <section className="near-you">
      <Filter fil={filter1} cur={filterBy} upfil={updatefilter}/>
      <Restaurent1 restaurent={restaurent}/>
      </section>
    </div>
  );
}

export default App;

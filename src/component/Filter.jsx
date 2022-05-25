import React from "react";

const Filter = ({fil,cur,upfil}) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
      {Object.entries(fil).map(([key,value])=>(
        <div key={key} className="restaurant-option" onClick={()=>upfil(key)}>
          {value}
          </div>

      ))}
        
      </div>
    </div>
  );
};

export default Filter;

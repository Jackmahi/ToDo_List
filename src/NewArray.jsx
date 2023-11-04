import React, { useState } from "react";
import Per from "./Per";

const NewArray = () => {

  const [inputdata,changeInputdata]=useState("")
  const [mydata, setdata] = useState([]);

  const remove = (i) => {
    setdata(mydata.filter((item) => item !== i));
    
    
  };


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputdata!==""){
      setdata([...mydata,inputdata])
      changeInputdata("")
    }
  }
  return (
    <div className="arr">

        <h3>Enter your Data</h3>

        <form className="formm"  onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your Name" onChange={(e)=>(changeInputdata(e.target.value))}/>

          <button type="submit">Submit</button>
        </form>
      {mydata.map((cur,index) => (
        <Per key={index} rollNo={index +1}name={cur}remove={remove}/>
      ))}

    </div>
    
  );
};

export default NewArray;

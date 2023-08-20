import React, { useState } from 'react';

const Addtodo = (props) => {

    const [title,settitle]=useState("");
    const [desc,setdesc] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("tilte and desc can not be blank")
        }else{
            props.Addtodoitem(title,desc)
            settitle(""); 
            setdesc("");
        }
    }

  let mystyle = {
    display: 'flex',
    flexDirection: 'column',
    gap:'10px',
    margin:'auto',
    width:'80%'

  };

  return (
    <>
      <form action="" style={mystyle} onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Headline' />

        <input type="textBox" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder='Description' />
        <button type='submit'style={{width:"80px",margin:'auto',borderRadius:'10px',backgroundColor:"lightGray",border:'1px solid black'}}>Submit</button>
      </form>
    </>
  );
}

export default Addtodo;

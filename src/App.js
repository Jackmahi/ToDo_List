import React, { useState } from "react";
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import Addtodo from './Mycomponents/Addtodo'
function App() {
  let [todos, settodos] = useState([  ]);
  

  const Addtodoitem=(title,desc)=>{
    const sno = todos.length+1;
    const newObject = { sNo: sno,title:title,desc:desc };
    settodos([...todos, newObject]);

  }

  const deleteitem = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const bodystyle ={
    backgroundColor: '#edf4f6'
  }

  return (
    <div style={bodystyle} ><Header title="My ToDo List" search={true} />
      <Addtodo Addtodoitem={Addtodoitem}/>
      <Todos todos={todos} ondelete={deleteitem}/>
      <Footer />
      
    </div>
  );
}

export default App;

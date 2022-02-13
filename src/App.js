
import './App.css';
import Child1 from './Child1';

import React, {createContext,useState,useEffect} from 'react'

export const ParentContext=createContext()
function App() {
const [name,setName]=useState("Ram")

// useEffect(()=>{
//   setName("Ravan")
// },[])
  return (
   <ParentContext.Provider value={{name,setName}}>
     <h1>Name from Parent {name}</h1>
   <Child1 />
   </ParentContext.Provider>
  );
}

export default App;

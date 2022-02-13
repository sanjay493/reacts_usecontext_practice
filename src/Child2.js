import React,{useContext,useState} from 'react'
import {ParentContext} from './App'

const Child2 = () => {
    const {name,setName} =useContext(ParentContext)
    const [changeName,setChangeName] =useState(null)
const onClick=()=>{
    alert(changeName); 
    setName(changeName)
}
  return (
      <>
    <div>Name in Child2 from parent {name}</div>
    <div>
        <input type="tex" onChange={(e)=>{setChangeName(e.target.value)}} />
        <button type="submit" onClick={onClick}>Change Name</button>
    </div>
    </>
  )
}

export default Child2
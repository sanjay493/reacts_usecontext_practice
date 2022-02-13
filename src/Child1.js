import React,{useContext} from 'react'
import {ParentContext} from './App'
import Child2 from './Child2'

const Child1 = () => {
    const {name} =useContext(ParentContext)
  return (<>
    <div>Name in Child1 {name}</div>
    <Child2 />
    </>
  )
}

export default Child1
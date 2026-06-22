import {useEffect, useRef, useState} from 'react'
function Ref(){
   const myref1= useRef()
    const myref2= useRef()
     const myref3= useRef()
  
   let chnge=()=>{
    console.log(myref1.current.value)
    console.log(myref2.current.value)
    console.log(myref3.current.value)
   
   
   }
//    console.log(myref.current.innerText)
useEffect(()=>{
    myref1.current.focus()
},[])
    return(
        <div>
            <input type="text" ref={myref1} /><br />
             <input type="text" ref={myref2} /><br />
              <input type="text" ref={myref3} />
            <button onClick={()=>chnge()}>Print name</button>
            
        </div>
    )
}
export default Ref
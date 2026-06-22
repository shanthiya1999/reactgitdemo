import { useState } from "react"
import {Button, Head} from './StyledComp'
import React from "react"
function MulState(guest){
    let{name}=guest
    console.log(name);
    let{name1,age}=name
    
    
    let cond=false
   let mystyle={
    color:cond?"green":"red",
    backgroundColor:cond?"white":"black"
   }
    
    return(
        <div>
           
            <h2 style={mystyle}>Hello {name1}</h2>
            <h2>{age}</h2>
                 

        </div>
    )

}
export default MulState
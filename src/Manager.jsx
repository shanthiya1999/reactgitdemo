import { useReducer } from "react"
function reducer(state,action){
   switch(action){
    case 1:
        return "Mon"
    case 2:
        return "Tues"
    default:
        return state
   }
}
function Manager(){
    const[data,dispatch]=useReducer(reducer,"")
    return(
        <div>
            Data:{data}
            <h2>This is a Bank managing App</h2>
            <button onClick={()=>dispatch(1)}>1</button>
            <button onClick={()=>dispatch(2)}>2</button>
            <button>Nothing</button>
        </div>
    )
}
export default Manager

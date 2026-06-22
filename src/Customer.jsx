import { useSelector,useDispatch } from "react-redux"
import { withdraw,deposit } from "./Slice"

function Customer(){
   const data= useSelector((state)=>state.savings.value)
   const dispatch=useDispatch()
  
    return(
        <div>
            Customer:{data}
            <button onClick={()=>dispatch(withdraw(100))}>Withdraw</button>
            <button onClick={()=>dispatch(deposit(500))} >Deposit</button>            
        </div>
    )
}
export default Customer
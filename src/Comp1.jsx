import Comp2 from "./Comp2"

function Comp1({name}){
    // let{name}=data1
    return (
        <div>
            comp1
            <Comp2 name1={name}/>
        </div>
    )
}
export default Comp1
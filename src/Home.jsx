import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()
    return(
        <div>
            <h2>I am Home Component</h2>
            <button onClick={()=>navigate('/products')}>Go to Products</button>
        </div>
    )
}
export default Home
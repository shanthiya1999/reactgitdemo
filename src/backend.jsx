import { useState } from "react"
import axios from 'axios'

function Backend() {
    const [data, setdata] = useState("")
    const [pass, setpass] = useState("")


    function send() {
        axios.post("http://localhost:3000/post",{data,pass})
    .then(() => {
            console.log("success")
        }
        )
    }

    return <>

        Username:<input onChange={(e) => setdata(e.target.value)} value={data} /><br />
        Password:<input onChange={(e) => setpass(e.target.value)} value={pass} /><br />
        <h1>{data}</h1>
        <button onClick={send}>send</button>

    </>
}
export default Backend
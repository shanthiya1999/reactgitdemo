import { useContext } from "react"
import { NoticeBoard } from "./NoticeBoard"

function Child(){
const data=useContext(NoticeBoard)
    return(
        <div>
            <h2>Msg from parent {data}
            </h2>
        </div>
    )
}
export default Child
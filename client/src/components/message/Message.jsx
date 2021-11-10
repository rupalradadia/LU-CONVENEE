import './message.css'
import {format} from "timeago.js"
export default function Message({message, own}){
    return(
        <div className= {own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg" alt="" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
import React ,{useState,useEffect}from 'react'
import MessageCard from './MessageCard';
import "./MessageList.css"

function MessageList() {
    const[message,setMessages]=useState([]);

useEffect(
    ()=>{
        fetch("https://react-message-9f700-default-rtdb.asia-southeast1.firebasedatabase.app/message.json")
        .then(response=>response.json())
        .then(data=>{
            let messageList=[];
            for(let key in data){
                messageList.push(data[key])
            }
            let messageToDisplay=messageList;
            messageToDisplay=messageToDisplay.reverse();
            messageToDisplay=messageToDisplay.slice(0,5)
            setMessages(messageToDisplay)
        })
    },[]
)
console.log(message);

  return (
    <div className="message-container">
        {message.length>0 && message.map(
            (message,index)=><MessageCard key={index} message={message}/>
            
        )}
    </div>
  )
}

export default MessageList
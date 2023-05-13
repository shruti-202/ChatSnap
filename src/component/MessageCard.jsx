import React from 'react'
import  "./MessageCard.css"


function MessageCard({message}) {
  return (
    <div className="message-card">
    <div className="user-name">{message.userName}</div>
    <div className="user-message">{message.userMessage}</div>
    </div>
  )
}

export default MessageCard
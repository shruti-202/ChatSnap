import React , {useState} from "react";
import './Form.css'


function Form() {

  const[name,setName]=useState("");
  const[message,setMessage]=useState("");

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }

  const handleMessageChange=(e)=>{
    setMessage(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,":-",message)
    const formName = name.trim()
    const formMessage = message.trim()

    if (formName === '' || formMessage === '') {
      alert('Please fill all the fields')
      return;
    }
    if (formName.length < 3) {
      alert('Name must be at least 3 characters long')
      return;
    }
    if (formMessage.length < 10) {
      alert('Message must be at least 10 characters long')
      return;
    }

       // POST MESSAGE
    fetch('https://react-message-9f700-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        userName : name,
        userMessage : message
      }),
    }).then(()=>{
      console.log("Submitted");
      alert("Thanks! Your Message has been send to Shruti ");
      

      //reset Form after Submission...
      setName("");
      setMessage("");
    })
  }
  
  return (
    <div className='form-container'>
      <form>
      <div className="form-header">
        Send Shruti a message.
      </div>
      <div className='form-input'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <input type="text" placeholder='john doe' onChange={handleNameChange} value={name}  pattern="^/(?:(\w)(?!\1\1))+$/"/>
      </div>
      <div className='form-input'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
        <input type="text" placeholder='say something about me :)' onChange={handleMessageChange} value={message}  pattern="^(?:(\w)(?!\1\1))+$"/>
      </div>
      <div className='form-btn'>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </form>
      
    </div>
  )
}
export default Form
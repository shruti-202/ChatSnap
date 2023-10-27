import React from "react";
import "./App.css";
import Form from "./component/Form";
import MessageList from "./component/MessageList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form />
      </div>
      <MessageList />
    </div>
  );
}
export default App;

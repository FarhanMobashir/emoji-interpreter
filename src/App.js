import './App.css';
import React, { useEffect, useState } from "react";

const db = {
  "😬": "Grimacing Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "😍" :"Smiling Face with Heart-Eyes",
  "😎" : "Smiling Face with Sunglasses",
  "😑" : "Expressionless Face",
  "🤐" : "Zipper-Mouth Face",
  "🙄" : "Face with Rolling Eyes",
  "😛" : "Face with Tongue"
}

const emojis = Object.keys(db);

function App() {

  const [inputValue, setInputValue] = useState("");
  const [meaning,setMeaning] = useState("");
  const inputChangeHandler = (event) => {
      setInputValue(event.target.value.slice(0,2));
  }

  function emojiClickHandler(item) {
    console.log(item)
    setInputValue("");
    setMeaning(db[item.target.innerText]);
    item.target.style.backgroundColor = "red";
    item.target.style.transition = "0.5s";
    item.target.style.borderRadius = "50px";
    item.target.style.padding = "10px";
    setTimeout(() =>{
    item.target.style.backgroundColor = "white";
    item.target.style.padding = "0px";

    },1000)
  }

  useEffect(() => {
    inputValue.length === 0 ? setMeaning("Waiting for your input") 
    : db[inputValue] === undefined ?  setMeaning("Oops! we don't have that in our db") 
    : setMeaning(db[inputValue])
  },[inputValue])
 

  return (
    <div className="App">
      <header className="header">
      <div className="header-upper">
        <h1 className="heading">Emoji Interpreter</h1>
      </div>
      <div className="header-lower">
        <h5 className="sub-heading">Learn the meaning of emojis you love</h5>
      </div>
    </header>
    <main className="main">
      <input type="text" className="input" placeholder="Enter your emoji here..."  value={inputValue} onChange={inputChangeHandler}/>
      <small>Emoji Meaning</small>
      <h1 className="meaning">{meaning}</h1>
      <div className="emoji-container">
      {
        emojis.map((item) => {
          return (
            <h1 className="emoji" key={item}
            // onClick={() => setMeaning(db[item])}
            onClick={emojiClickHandler}
            >{item}</h1>
          )
        })
      }
      </div>
    </main>
     <footer className="footer">
      <div className="footer-columns">
        <h4 className="footer-heading">Emoji Interpreter</h4>
        <small className="small">Made with love and Reactjs</small>
        <a className="footer-link" href="/">Source code</a>
        <a className="footer-link" href="/">Learn to make your own</a>
      </div>
      <div className="footer-columns">
        <h4 className="footer-heading">Made by</h4>
        <small className="small"
          >Mobashir Farhan. Feel free to connect and share your feedback</small
        >
        <a className="footer-link" href="/">Github</a>
        <a className="footer-link" href="/">Twitter</a>
        <a className="footer-link" href="/">LinkedIn</a>
      </div>
      
    </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/s.scss";
import myImg from "./assets/img/img.jpg";

const name = <h1 className="introduceText">Hello, my name is <span>zeynab pahlevani</span></h1>

const introduce = <p>I am a junior front end developer</p>;
// const styleSheet = {
//   color: "green",
//   fontSize: 80,
//   backgroundColor: "lightgrey",
// };
//  const URL = "https://www.google.com";
// const friends = ["zynb", "ali", "mahla", "sara"];
// const sending = true;
// const friendsJsx = friends.map((friend) => (
//   <div key={friend} style={styleSheet}>
//     {friend}
//     <button style={{display:sending ? 'block' : 'none'}}>falow</button>
//   </div>
// ));

// const sending = true;
// const myJSX = sending == 'true' && <div>lodinge...</div>;

/////

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="conteiner">
    <img className="img" src={myImg} />
    <p className="introduceText">
      {name}
      {introduce}
    </p>
  </div>
);

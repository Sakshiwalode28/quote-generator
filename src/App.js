import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import img1 from "./light-bulb.png";
import img from "./quote.png";

function App() {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const fetchAdvice = (e) => {
    e.preventDefault();
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        console.log(response);
        const { content, author } = response.data;
        console.log(content);
        setNewQuote(content);
        setNewAuthor(author);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="app_body">
        {newQuote === "" ? (
          <div className="no_quote">
            <div className="text">
            <img src={img1} alt="quote" className="img1" />
           Give a start to your day with a great quote!
            </div>
            <button onClick={fetchAdvice} className="img1_btn">
             Get A Quote
            </button>
          </div>
        ) : (
          <>
            <div className="quote">{newQuote}</div>
            <div className="quote_author">
              <hr />
              <div className="author">~{newAuthor}</div>
            </div>
            <button onClick={fetchAdvice}>
              <div className="btn-content">
                New Quote
                <img src={img} alt="quote" className="img" />
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

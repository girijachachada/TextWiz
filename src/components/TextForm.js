import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //setText("New Text");

  const handleUpperClick = () => {
    //console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    //console.log("On Change")
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleCapitalize = () => {
    let words = text.split(" ");
    let newText = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
    setText(newText);
  }

  const handleSentenceCase = () => {
    let sentences = text.split(/([.!?]\s*)/);
    let newText = sentences.map(sentence => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
      }).join("");
    setText(newText);
  }
  
  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleCopy}>
          Copy Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleCapitalize}>
          Capitalize
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'light'} mx-1`} onClick={handleSentenceCase}>
          Sentence Case
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text above to preview..."}</p>
      </div>
    </>
  );
}

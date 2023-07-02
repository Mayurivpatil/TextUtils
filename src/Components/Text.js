import React, { useState } from "react";

export default function Text(props) {
  const handleupcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to Uppercase","Success");
  };

  const handlelocase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to Lowercase","Success");
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
     props.showalert("Text capitalized!","Success");
  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showalert("Text reversed!","Success");
  };

  const WhiteSpace = () => {
    let updated_text = text.replace(/\s/g, "");
    setText(updated_text);
    props.showalert("Whitespaces removed!","Success");
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
    props.showalert("Extra spaces removed!","Success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clickboard!","Success");
   };

  const handlechange = (event) => {
    console.log("On changed");
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");
  return (
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#031660'}}>
        <h1 className='mb-14'>{props.heading}</h1>
        <h4>Enter your text :</h4>
        <textarea
          className="form-control"
          onChange={handlechange}
          style={{backgroundColor:props.mode==='dark'?'#7c91b7':'white',color:props.mode==='dark'?'white':'black'}}
          id="textform"
          rows="8"
          value={text}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleupcase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handlelocase}>
          Convert to Lowercase
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleCapitalize}
        >
          Capitalise the text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleReverse}>
          Reverse text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={WhiteSpace}>
          Remove Whitespaces
        </button>
        <button
          disabled={text.length===0}
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={copyText}>
          Copy the text
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#031660'}}>
        <h2>Your text details</h2>
        <p>
          {" "}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the something in the textbox for preview"}</p>
      </div>
    </div>
  );
}

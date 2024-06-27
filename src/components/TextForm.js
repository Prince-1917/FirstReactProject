import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let newText2=text.toLowerCase();
        setText(newText2);
    }
    const handleClearClick =() =>{
        let newText3=("");
        setText(newText3);
    }
    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase!</div>
            <div className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase!</div>
            <div className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

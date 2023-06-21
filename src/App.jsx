import { useState } from 'react'
import "./App.css"
import Input from "./Input.jsx";
import WordCounter from "./WordCounter.jsx";

function App() {

    const [text, setText] = useState("");
    const handleInputChange = (e) =>{
        setText(e.target.value);
    };

   const charCount = text.length;
  return (
    <div>
        <Input value={text} onChange={handleInputChange}/>
        <WordCounter  count = {`Character Count: ${charCount}`} />
    </div>
  )
}

export default App

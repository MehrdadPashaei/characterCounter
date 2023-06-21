import "./App.css"
import "./WordCounter.jsx"
import React from 'react';


function Input ({ value, onChange }){

    return (
        <div>
            <input type="text" id="inputSectin" placeholder="type into me!" className="input-to-copy" value = {value} onChange={onChange}/>
        </div>
    )
}

export default Input;
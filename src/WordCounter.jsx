import "./App.css"
import React from 'react';


function WordCounter ({count}) {
    return (
        <div>
            <p className="p-to-copy-to" > {count} </p>
        </div>
    )
}

export default WordCounter;
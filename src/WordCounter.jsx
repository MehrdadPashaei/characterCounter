import "./App.css"
import React from 'react';


function WordCounter ({count}) {
    return (
        <div>
            <p className="paragraph" > Character Count : {count.length} </p>
        </div>
    )
}

export default WordCounter;
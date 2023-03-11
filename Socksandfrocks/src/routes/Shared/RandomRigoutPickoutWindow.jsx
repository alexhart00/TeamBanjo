import React, { useState } from 'react';

export default function RandomRigoutPickoutWindow() {
    const [randomNum, setRandomNum] = useState(5);
    
    const handleRandomNum = () => {
        setRandomNum(Math.random(25))
    };

    return(
          <div class="ml-80">
            <h1><span>{randomNum}</span></h1>
                <button onClick={handleRandomNum()}>
                    Return Random Number
                </button>
          </div>
    );    
}
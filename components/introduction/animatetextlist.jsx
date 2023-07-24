import React, { useState, useEffect } from 'react';

const values = ['BEAUTY', 'DREAM', 'HAPPINESS', 'FULLFILLMENT', 'STYLE', 'SELF-WORTH', 'DECISION', 'TRANSITION'];
let counter = 0;

function AnimateTextList() {
  const [text, setText] = useState(values[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      counter = counter < values.length - 1 ? counter + 1 : 0;
      setText(values[counter]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-32 ml-auto mr-auto font-bold text-3xl text-center">
    <h2 className="text-white text-shadow-emboss glossy-text">AT PHOENIQUELIFE, WE BELIEVE THAT</h2>
    <h2 className="flex items-start text-white text-shadow-emboss glossy-text mt-32 text-7xl">
        <span>YOUR </span>
        <span className="text-orange-800 text-shadow-emboss inline ml-2 text-7xl">  {text}</span>
    </h2>
    <h3 className="text-white text-shadow-emboss glossy-text mt-32">SOMETIMES NEEDS A HELPING HAND</h3>
</div>


  
  );
}

export default AnimateTextList;

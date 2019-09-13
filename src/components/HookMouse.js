import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
      console.log('mouse event')
      setX(e.clientX)
      setY(e.clientY)
  };

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener("mousemove", logMousePosition)

    return () => {
        console.log("component unmounting code")
        window.removeEventListener('mousemove', logMousePosition)
    }

  }, []); // second parameter is to render just one time

  return (
    <div className="container">
     <p>Hooks mouse position on the screen</p>  
     <p>X - {x}</p>
     <p>Y - {y}</p> 
    </div>
  );
};

export default HookMouse;

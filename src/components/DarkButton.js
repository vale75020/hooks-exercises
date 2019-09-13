import React, {useState} from 'react';

const DarkButton = () => {
    const [style, setStyle] = useState(true);
    const [buttonstyle, setButtonstyle] = useState("Dark Mode");
    const [background, setBackground] = useState({});

    
    const changeStyle = () => {
        setStyle(!style)
        setBackground(style ? {backgroundColor : "black"} : {backgroundColor : "white"})
        setButtonstyle(style ? "Dark Mode" : "Light Mode")
    }
    return (
        <div style={background}>
            <button onClick={changeStyle}>{buttonstyle}</button>
        </div>
    );
};

export default DarkButton;
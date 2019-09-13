import React, {useState} from 'react';

const DarkButton = () => {
    const [style, setStyle] = useState(true);
    const [buttonstyle, setButtonstyle] = useState("Dark Mode");

    const changeStyle = () => {
        setStyle(!style)
     
        setButtonstyle(style ? "Dark Mode" : "Light Mode")
    }
    return (
        <div>
            <button onClick={changeStyle}>{buttonstyle}</button>
        </div>
    );
};

export default DarkButton;
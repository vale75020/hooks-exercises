import React, { useEffect, useState } from 'react';

const CounterOne = () => {
    const [count, setCount] = useState(0);
    const[msg, setMsg] = useState("");
    const [style, setStyle] = useState({width:"100px", margin:"0 auto"});
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `you clicked ${count} times!`
        count > 0
            ? setMsg("look at the document's title")
            : setMsg("")
    }, [count]) // to update only count

   const bigImg = () => {
        setStyle({width:"auto", margin:"0 auto"})
    }

    const littleImg = () => {
        setStyle({width:"100px"})
    }

    return (
        <div className="container">
            <div>
                <p>On mouse over to see my code</p>
            <img className="img" src="counterOne.png" style={style} onMouseOver={bigImg} onMouseOut={littleImg} alt="code" />
            </div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => {setCount(count+1)}}>You clicked {count} times!</button>
            <p>{msg}</p>
            <button onClick={() => {setCount(0)}}>Reset</button>
        </div>
    );
};

export default CounterOne;
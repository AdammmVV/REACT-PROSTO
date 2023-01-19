import React, {useState} from "react";

export const OnOffButton = () => {
    const [onOff, setOnOff] = useState(false)

    const circle = `circle ${onOff && 'on'} ${!onOff && 'off'}`;

    let onStyle = {
        width: '50px',
        height: '50px',
        backgroundColor: onOff ? 'green': 'white',
    }

    let offStyle = {
        width: '50px',
        height: '50px',
        margin: '5px',
        backgroundColor: onOff ? 'white' : 'red',
    }

    let circleStyle = {
        width: '70px',
        height: '70px',
        border: '1px solid black',
        margin: '0 auto',
        borderRadius: '50px',
        backgroundColor: onOff ? 'green' : 'red'
    }

    return (
        <div className='onOffButton'>
            <div>
                <button style={onStyle} onClick={() => setOnOff(true)}>ON</button>
            </div>
            <div>
                <button style={offStyle} onClick={() => setOnOff(false)}>OFF</button>
            </div>
            <div style={circleStyle}>
            </div>
        </div>
    )
}
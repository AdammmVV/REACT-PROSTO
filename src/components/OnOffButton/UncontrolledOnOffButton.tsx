import React, {useState} from "react";
import {circleStyle, offStyle, onStyle} from "./OnOffButton";

export const UncontrolledOnOffButton = () => {
    const [onOff, setOnOff] = useState(false)

    const finalOnStyle = {...onStyle, backgroundColor: onOff ? 'green' : 'white'}
    const finalOffStyle = {...offStyle, backgroundColor: onOff ? 'white' : 'red'}
    const finalCircleStyle = {...circleStyle, backgroundColor: onOff ? 'green' : 'red'}


    const onClicked = () => {
        setOnOff(true)
    }

    return (
        <div className='onOffButton'>
            <div>
                <button style={finalOnStyle} onClick={onClicked}>ON</button>
            </div>
            <div>
                <button style={finalOffStyle} onClick={() => setOnOff(false)}>OFF</button>
            </div>
            <div style={finalCircleStyle}>
            </div>
        </div>
    )
}
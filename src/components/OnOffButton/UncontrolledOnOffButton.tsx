import React, {useState} from "react";
import {circleStyle, offStyle, onStyle} from "./OnOffButton";

export const UncontrolledOnOffButton = () => {
    const [onOff, setOnOff] = useState(false)

    return (
        <div className='onOffButton'>
            <div>
                <button style={{...onStyle, backgroundColor: onOff ? 'green' : 'white'}} onClick={() => setOnOff(true)}>ON</button>
            </div>
            <div>
                <button style={{...offStyle, backgroundColor: onOff ? 'white' : 'red'}} onClick={() => setOnOff(false)}>OFF</button>
            </div>
            <div style={{...circleStyle, backgroundColor: onOff ? 'green' : 'red'}}>
            </div>
        </div>
    )
}
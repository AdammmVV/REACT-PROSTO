import React from "react";

export type OnOffButtonPropsType = {
    onOff: boolean
    setOnOff: (value: boolean)=> void
}

export const onStyle = {
    width: '50px',
    height: '50px',

}

export const offStyle = {
    width: '50px',
    height: '50px',
}

export const circleStyle = {
    width: '70px',
    height: '70px',
    border: '1px solid black',
    borderRadius: '50px',
}

export const OnOffButton: React.FC<OnOffButtonPropsType> = ({onOff, setOnOff}) => {

    const finalOnStyle = {...onStyle, backgroundColor: onOff ? 'green' : 'white'}
    const finalOffStyle = {...offStyle, backgroundColor: onOff ? 'white' : 'red'}
    const finalCircleStyle = {...circleStyle, backgroundColor: onOff ? 'green' : 'red'}

    return (
        <div className='onOffButton'>
            <div>
                <button style={finalOnStyle} onClick={() => setOnOff(true)}>ON</button>
            </div>
            <div>
                <button style={finalOffStyle} onClick={() => setOnOff(false)}>OFF</button>
            </div>
            <div style={finalCircleStyle}>
            </div>
        </div>
    )
}
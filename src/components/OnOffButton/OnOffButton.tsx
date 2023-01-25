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
    margin: '5px',
}

export const circleStyle = {
    width: '70px',
    height: '70px',
    border: '1px solid black',
    margin: '0 auto',
    borderRadius: '50px',
}

export const OnOffButton: React.FC<OnOffButtonPropsType> = ({onOff, setOnOff}) => {

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
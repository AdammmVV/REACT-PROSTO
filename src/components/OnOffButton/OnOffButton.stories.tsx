import React, {useState} from 'react';
import {OnOffButton} from "./OnOffButton";
import '../../App.css'

export default {
    title: 'OnOffButton stories',
    component: OnOffButton
}

export const OnButton = () => <OnOffButton onOff={true} setOnOff={x=>x} />
export const OffButton = () => <OnOffButton onOff={false} setOnOff={x=>x} />

export const RatingChanged = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffButton onOff={value} setOnOff={setValue} />
}

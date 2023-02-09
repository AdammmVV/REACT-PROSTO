import React, {useState} from 'react';
import s from './Select.module.css'

const sel = [
    {title: 'Adamm', value: 1},
    {title: 'Natasha', value: 2},
    {title: 'Dima', value: 3},
    {title: 'Roma', value: 4},
]


export const Select = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [valueSelect, setValueSelect] = useState(1)


    const mapSel = sel.map(sel => {
        const onClockHandler = () => {
            setCollapsed(true)
            setValueSelect(sel.value)
        }
        return (
            <div key={sel.value} onClick={onClockHandler}>{sel.title}</div>
        )
    })
    return (
        <div className={s.wrapper}>
            {collapsed
                ? <div className={s.collapsed} onClick={()=>setCollapsed(false)}><span>{sel[valueSelect-1].title}</span></div>
                : <div className={s.unCollapsed}><span>{mapSel}</span></div>}
        </div>
    );
};

export const Selected1 = () => {
    return <select name="" id="">
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}
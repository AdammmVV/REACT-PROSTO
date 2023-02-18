import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'


export default {
    title: 'select'
}
const sel = [
    {title: 'Adamm', value: 1},
    {title: 'Natasha', value: 2},
    {title: 'Dima', value: 3},
    {title: 'Roma', value: 4},
]


export const Select = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [valueSelect, setValueSelect] = useState(1)
    const [hoverSelect, setHoverSelect] = useState(1)

    useEffect(() => {
        setHoverSelect(valueSelect)
    }, [valueSelect])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < sel.length; i++) {
                if (sel[i].value === valueSelect) {
                    let prencedenItem = e.key === 'ArrowUp' ? sel[i - 1] : sel[i + 1];
                    if (prencedenItem !== undefined) {
                        setValueSelect(prencedenItem.value)
                        break;
                    }
                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(false)
        }
    }

    const mapSel = sel.map(se => {
        const onClockHandler = () => {
            setCollapsed(!collapsed)
            setValueSelect(se.value)
            setHoverSelect(se.value)
        }
        return (
            <div key={se.value}
                 onMouseEnter={() => setHoverSelect(se.value)}
                 onClick={onClockHandler}
                 className={hoverSelect === se.value ? s.hover : ''}
            >{se.title}</div>
        )
    })
    return (
        <div className={s.wrapper}>
            <div className={s.collapsed}
                 onClick={() => setCollapsed(!collapsed)}
                 tabIndex={0}
                 onKeyUp={onKeyUpHandler}
            >{sel[valueSelect - 1].title}</div>
            {collapsed && <div className={s.option}>{mapSel}</div>}
        </div>
    );
};

export const SelectedDefault = () => {
    const mapOptions = sel
        ? sel.map(s => {
            return (
                <option key={s.value} value={s.value}>{s.title}</option>
            )
        })
        : sel;
    return (
        <select name="" id="">
            {mapOptions}
        </select>
    )
}
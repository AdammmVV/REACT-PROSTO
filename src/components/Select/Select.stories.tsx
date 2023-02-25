import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'


export type sel = {
    title: string
    value: number
    population: number
    country: string
}

const sel: sel[] = [
    {title: 'Брест', value: 1, population: 347576, country: 'Belarus'},
    {title: 'Минск', value: 2, population: 1982444, country: 'Belarus'},
    {title: 'Гродно', value: 3, population: 3704576, country: 'Belarus'},
    {title: 'Малиновка', value: 4, population: 7299, country: 'Moscow'},
    {title: 'Москва', value: 5, population: 11980000, country: 'Moscow'},
    {title: 'Мамаевцы', value: 6, population: 5818, country: 'Moscow'},
    {title: 'Майкоп', value: 7, population: 143385, country: 'Ukraine'},
    {title: 'Абаза', value: 8, population: 14816, country: 'Ukraine'},
    {title: 'Болотное', value: 9, population: 15644, country: 'Ukraine'},
]

type SelectPropsType = {
    option: sel[]
}

export const Select = (props: SelectPropsType) => {
    console.log('Rerender Select component')
    const [collapsed, setCollapsed] = useState(true)
    const [valueSelect, setValueSelect] = useState(1)
    const [hoverSelect, setHoverSelect] = useState(1)

    useEffect(() => {
        setHoverSelect(valueSelect)
    }, [valueSelect])

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.option.length; i++) {
                if (sel[i].value === valueSelect) {
                    let prencedenItem = e.key === 'ArrowUp' ? props.option[i - 1] : props.option[i + 1];
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

    const mapSel = props.option.map(se => {
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
            >{props.option[valueSelect - 1].title}</div>
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
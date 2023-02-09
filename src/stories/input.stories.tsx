import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';

export default {
    title: 'input',
};

export const UncontrolledInput = () => <input type="text"/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input type="text" onChange={(e) => {
        const activeValue = e.currentTarget.value
        setValue(activeValue)
    }}/> ---- {value}</>
};

export const GetValueOnButtonOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const newRefForInput = useRef<HTMLInputElement>(null)

    const saveValue = () => {
        if (newRefForInput.current) {
            const newValue = newRefForInput.current.value
            setValue(newValue)
            newRefForInput.current.value = ''
        }
    }

    return <><input ref={newRefForInput} type="text"/>
        <button onClick={saveValue}>save</button>
        nev value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    const onBlur = () => {
        setParentValue('')
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setParentValue('')
        }
    }

    return <input
        type="text"
        value={parentValue}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}/>
}



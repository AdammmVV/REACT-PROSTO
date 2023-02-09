import React, {useRef, useState} from 'react';
import {OnOffButton} from "../components/OnOffButton/OnOffButton";

export default {
  title: 'input',
  component: OnOffButton,
};

export const UncontrolledInput = () => <input type="text"/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return <><input type="text" onChange={(e)=> {
    const activeValue = e.currentTarget.value
    setValue(activeValue)
  }}/> ---- {value}</>
};

export const GetValueOnButtonOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const newRefForInput = useRef<HTMLInputElement>(null)

  const saveValue = () => {
    if(newRefForInput.current) {
      const newValue = newRefForInput.current.value
      setValue(newValue)
      newRefForInput.current.value = ''
    }
  }

  return <><input ref={newRefForInput} type="text"/><button onClick={saveValue}>save</button> nev value: {value}</>
}



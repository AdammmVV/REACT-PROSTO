import React, {useMemo, useState} from 'react';
import {sel, Select} from "../components/Select/Select.stories";


export default {
    title: 'select-memo'
}

const SelectMemo = React.memo(Select)

export const HelpExample = () => {

    const [counter, setCounter] = useState(0)
    const [sel, setSel] = useState<sel[]>([
        {title: 'Брест', value: 1, population: 347576, country: 'Belarus'},
        {title: 'Минск', value: 2, population: 1982444, country: 'Belarus'},
        {title: 'Гродно', value: 3, population: 3704576, country: 'Belarus'},
        {title: 'Малиновка', value: 4, population: 7299, country: 'Moscow'},
        {title: 'Москва', value: 5, population: 11980000, country: 'Moscow'},
        {title: 'Мамаевцы', value: 6, population: 5818, country: 'Moscow'},
        {title: 'Майкоп', value: 7, population: 143385, country: 'Ukraine'},
        {title: 'Абаза', value: 8, population: 14816, country: 'Ukraine'},
        {title: 'Болотное', value: 9, population: 15644, country: 'Ukraine'},
    ])
    console.log('Rerender component HelpExample')
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <SelectMemo option={sel}/>
        </>
    )
}


export const HelpExamplePopular = () => {

    const [counter, setCounter] = useState(0)
    const [sel, setSel] = useState<sel[]>([
        {title: 'Брест', value: 1, population: 347576, country: 'Belarus'},
        {title: 'Минск', value: 2, population: 1982444, country: 'Belarus'},
        {title: 'Гродно', value: 3, population: 3704576, country: 'Belarus'},
        {title: 'Малиновка', value: 4, population: 7299, country: 'Moscow'},
        {title: 'Москва', value: 5, population: 11980000, country: 'Moscow'},
        {title: 'Мамаевцы', value: 6, population: 5818, country: 'Moscow'},
        {title: 'Майкоп', value: 7, population: 143385, country: 'Ukraine'},
        {title: 'Абаза', value: 8, population: 14816, country: 'Ukraine'},
        {title: 'Болотное', value: 9, population: 15644, country: 'Ukraine'},
    ])

    const newArr = useMemo(() => {
        return sel.filter(s => s.population > 100000)
    }, [sel])

    const addNewCity = () => {
        let newCity = {title: 'Mозырь', value: 10, population: 347576, country: 'Belarus'}
        setSel([...sel, newCity])
    }

    console.log('Rerender component HelpExample')

    return (
        <>
            <button onClick={addNewCity}>addCity</button>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
            <SelectMemo option={newArr}/>
        </>
    )
}

export const HelpExampleFirstLetter = () => {

    const [counter, setCounter] = useState(0)
    const [sel, setSel] = useState<sel[]>([
        {title: 'Брест', value: 1, population: 347576, country: 'Belarus'},
        {title: 'Минск', value: 2, population: 1982444, country: 'Belarus'},
        {title: 'Гродно', value: 3, population: 3704576, country: 'Belarus'},
        {title: 'Малиновка', value: 4, population: 7299, country: 'Moscow'},
        {title: 'Москва', value: 5, population: 11980000, country: 'Moscow'},
        {title: 'Мамаевцы', value: 6, population: 5818, country: 'Moscow'},
        {title: 'Майкоп', value: 7, population: 143385, country: 'Ukraine'},
        {title: 'Абаза', value: 8, population: 14816, country: 'Ukraine'},
        {title: 'Болотное', value: 9, population: 15644, country: 'Ukraine'},
    ])

    const newArr = useMemo(() => {
        return sel.filter(s => s.title[0].toLowerCase().indexOf('м') > -1)
    }, [sel])

    console.log('Rerender component HelpExample')
    const addNewCity = () => {
        let newCity = {title: 'Mозырь', value: 10, population: 347576, country: 'Belarus'}
        setSel([...sel, newCity])
    }

    return (
        <>
            <button onClick={addNewCity}>addCity</button>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            {counter}
            <SelectMemo option={newArr}/>
        </>
    )
}

export const HelpExampleCountryName = () => {

    const [counter, setCounter] = useState(0)
    const [sel, setSel] = useState<sel[]>([
        {title: 'Брест', value: 1, population: 347576, country: 'Belarus'},
        {title: 'Минск', value: 2, population: 1982444, country: 'Belarus'},
        {title: 'Гродно', value: 3, population: 3704576, country: 'Belarus'},
        {title: 'Малиновка', value: 4, population: 7299, country: 'Moscow'},
        {title: 'Москва', value: 5, population: 11980000, country: 'Moscow'},
        {title: 'Мамаевцы', value: 6, population: 5818, country: 'Moscow'},
        {title: 'Майкоп', value: 7, population: 143385, country: 'Ukraine'},
        {title: 'Абаза', value: 8, population: 14816, country: 'Ukraine'},
        {title: 'Болотное', value: 9, population: 15644, country: 'Ukraine'},
    ])

    const newArr = useMemo(() => {
        return sel.filter(s => s.country === 'Belarus')
    }, [sel])

    const addNewCity = () => {
        let newCity = {title: 'Mозырь', value: 10, population: 347576, country: 'Belarus'}
        setSel([...sel, newCity])
    }

    console.log('Rerender component HelpExample')

    return (
        <>
            <button onClick={addNewCity}>addCity</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <SelectMemo option={newArr}/>
        </>
    )
}
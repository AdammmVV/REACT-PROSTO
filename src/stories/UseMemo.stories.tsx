import React, {useMemo, useState} from "react";
import {UsersPropsType} from "./ReactMemo.stories";

export default {
    title: 'useMemo',
}

export const DifficultCounterExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempRes = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const faceRandom = Math.random()
            }
            tempRes *= i
        }
        return tempRes
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const Users = (props: UsersPropsType) => {
    console.log("blat users")

    const userMap = props.user.map((u, i) => <div key={i}>{u}</div>)

    return (
        <div>
            {userMap}
        </div>
    )
}

export const UsersMemo = React.memo(Users)

export const HelpForReactExample = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Adamm', 'Andruha', 'Vladimir', 'Valentina', 'Alena', 'Roma'])

    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('m') > -1)
    }, [users])

    const addUser = () => setUsers([...users, 'Masha'])

    console.log('blat Help')
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>addUser</button>
            {counter}
            <UsersMemo user={newArr}/>
        </>
    )
}
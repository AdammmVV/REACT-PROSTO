import React from "react";

export default {
    title: 'React memo demo',
}

export const NewMessageCounter = (props: {count: number}) => {
    return (
        <div>{props.count}</div>
    )
}

export type UsersPropsType = {
    user: string[]
}

export const Users = (props: UsersPropsType) => {

    const userMap = props.user.map((u, i) => <div key={i}>{u}</div>)

    return (
        <div>
            {userMap}
        </div>
    )
}

export const Example1 = () => {
    const users = ['Adamm', 'Andruha', 'Vladimir', 'Valentina', 'Alena','Roma']
    return (
        <>
            <NewMessageCounter count={10}/>
            <Users user={users}/>
        </>
    )
}
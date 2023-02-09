import s from "../Rating/Rating.module.css";
import React from "react";
import {RatingStarType} from "../Rating/Rating";

type StarPropsType = {
    selected: boolean
    setRating: (value: RatingStarType) => void
    value: RatingStarType
}
export const Star = (props: StarPropsType) => {
    const finalStarStyle = props.selected ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'}
    const onClickStarHandler = () => {
        props.setRating(props.value)
    }


    return <span className={s.star} style={finalStarStyle} onClick={onClickStarHandler}> </span>
}
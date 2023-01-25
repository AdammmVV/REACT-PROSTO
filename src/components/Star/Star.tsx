import React from "react";
import s from './Star.module.css'

export type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingStarType
    setRatingValue: (value:RatingStarType)=>void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} setRating={props.setRatingValue} value={1}/>
            <Star selected={props.value > 1} setRating={props.setRatingValue} value={2}/>
            <Star selected={props.value > 2} setRating={props.setRatingValue} value={3}/>
            <Star selected={props.value > 3} setRating={props.setRatingValue} value={4}/>
            <Star selected={props.value > 4} setRating={props.setRatingValue} value={5}/>
        </div>
    );
}
type StarPropsType = {
    selected: boolean
    setRating: (value: RatingStarType) => void
    value: RatingStarType
}
export const Star = (props: StarPropsType) => {
    const finalStarStyle = (props.selected ? {backgroundColor: 'yellow'} : {backgroundColor: 'white'})
    const onClickStarHandler = () => {
        props.setRating(props.value)
    }


    return <span className={s.star} style={finalStarStyle} onClick={onClickStarHandler}></span>
}

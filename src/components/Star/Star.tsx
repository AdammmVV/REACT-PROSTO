import React from "react";
import s from './Star.module.css'

export type RatingStarType = 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingStarType | 0
    setRatingValue: (value:RatingStarType)=>void
    star: RatingStarType[]
}

export const Rating = (props: RatingPropsType) => {

    const mapStar = props.star.map(el => <Star selected={props.value >= el} setRating={props.setRatingValue} value={el}/>)

    return (
        <div>
            {mapStar}
        </div>
    );
}
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

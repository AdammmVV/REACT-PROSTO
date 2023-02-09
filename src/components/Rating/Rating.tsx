import React from "react";
import {Star} from "../Star/Star";

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

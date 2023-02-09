import React, {useState} from "react";
import s from '../Rating/Rating.module.css'

export type RatingStarType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = () => {

    const [rating, setRating] = useState<RatingStarType>(0)
    return (
        <div>
            <Star selected={rating > 0} setRating={setRating} value={1}/>
            <Star selected={rating > 1} setRating={setRating} value={2}/>
            <Star selected={rating > 2} setRating={setRating} value={3}/>
            <Star selected={rating > 3} setRating={setRating} value={4}/>
            <Star selected={rating > 4} setRating={setRating} value={5}/>
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

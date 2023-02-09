import React, {useState} from 'react';
import {Rating, RatingStarType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyRating = () => <Rating value={0} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const Rating1 = () => <Rating value={1} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const Rating2 = () => <Rating value={2} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const Rating3 = () => <Rating value={3} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const Rating4 = () => <Rating value={4} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const Rating5 = () => <Rating value={5} star={[1, 2, 3, 4, 5]} setRatingValue={x=>x} />
export const RatingChanged = () => {
    const [rating, setRating] = useState<RatingStarType>(5)
    return <Rating value={rating} setRatingValue={setRating} star={[1, 2, 3, 4, 5]} />
}

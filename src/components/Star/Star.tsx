import React, {useState} from "react";

export const Rating = () => {
    const [rating, setRating] = useState(0)
    return (
        <div>
            <Star selected={rating > 0} setRating={()=>setRating(1)}/>
            <Star selected={rating > 1} setRating={()=>setRating(2)}/>
            <Star selected={rating > 2} setRating={()=>setRating(3)}/>
            <Star selected={rating > 3} setRating={()=>setRating(4)}/>
            <Star selected={rating > 4} setRating={()=>setRating(5)}/>
        </div>
        // if (props.value === 1) {
        //     return (
        //         <div>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //         </div>
        //     );
        // }
        // if (props.value === 2) {
        //     return (
        //         <div>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={false}/>
        //             <Star selected={false}/>
        //             <Star selected={false}/>
        //         </div>
        //     );
        // }
        // if (props.value === 3) {
        //     return (
        //         <div>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={false}/>
        //             <Star selected={false}/>
        //         </div>
        //     );
        // }
        // if (props.value === 4) {
        //     return (
        //         <div>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={false}/>
        //         </div>
        //     );
        // }
        // if (props.value === 5) {
        //     return (
        //         <div>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //             <Star selected={true}/>
        //         </div>
        //     );
        // }
        // return (
        //     <div>
        //         <Star selected={false}/>
        //         <Star selected={false}/>
        //         <Star selected={false}/>
        //         <Star selected={false}/>
        //         <Star selected={false}/>
        //     </div>
    );
}
type StarPropsType = {
    selected: boolean
    setRating: () => void
}
export const Star = (props: StarPropsType) => {

    let circle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: props.selected ? 'yellow' : 'white',
        borderRadius: '10px'
    }
    return <span style={circle} onClick={props.setRating}></span>
}
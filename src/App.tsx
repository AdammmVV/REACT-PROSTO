import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOffButton} from "./components/OnOffButton/OnOffButton";
import {UncontrollableAccordion} from "./components/Accordion/UncontrollableAccordion";
import {Rating, RatingStarType} from "./components/Star/Star";


const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingStarType>(0)
    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <PageTitle title={'Menu'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <UncontrollableAccordion titleValue={'Menu'}/>
            Article 2
            {/*<UncontrolledRating/>*/}
            <OnOffButton/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

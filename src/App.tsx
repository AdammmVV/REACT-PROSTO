import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOffButton} from "./components/OnOffButton/OnOffButton";
import {Rating, RatingStarType} from "./components/Star/Star";


const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingStarType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffButton, setOnOffButton] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<PageTitle title={'Menu'}/>*/}
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed} />
            {/*<UncontrollableAccordion titleValue={'Menu'}/>*/}
            {/*Article 2*/}
            {/*<UncontrolledRating/>*/}
            <OnOffButton onOff={onOffButton} setOnOff={setOnOffButton}/>
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

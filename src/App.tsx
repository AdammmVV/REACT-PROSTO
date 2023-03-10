import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffButton} from "./components/OnOffButton/OnOffButton";
import {Rating, RatingStarType} from "./components/Rating/Rating";
import {UncontrolledOnOffButton} from "./components/OnOffButton/UncontrolledOnOffButton";
import {Select} from "./components/Select/Select";
import {UncontrollableAccordion} from "./components/Accordion/UncontrollableAccordion";


const App = () => {
    const [ratingValue, setRatingValue] = useState<RatingStarType | 0>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffButton, setOnOffButton] = useState<boolean>(false)
    const star:RatingStarType[] = [1, 2, 3, 4, 5]

    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={ratingValue}
                    setRatingValue={setRatingValue}
                    star={star}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <OnOffButton onOff={onOffButton} setOnOff={setOnOffButton}/>
            <UncontrolledOnOffButton/> {onOffButton.toString()}
            <UncontrollableAccordion titleValue={'MENU'}/>
            <Select/>
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

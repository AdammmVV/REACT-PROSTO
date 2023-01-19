import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOffButton} from "./components/OnOffButton/OnOffButton";
import {UncontrollableAccordion} from "./components/Accordion/UncontrollableAccordion";
import {Rating} from "./components/Star/Star";


const App = () => {

    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating/>
            <PageTitle title={'Menu'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <UncontrollableAccordion titleValue={'Menu'}/>
            Article 2
            <Rating/>
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

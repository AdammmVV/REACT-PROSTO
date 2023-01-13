import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";


const App = () => {

    let [collapsed, setCollapsed] = useState(true)

    function collapsedClick() {
        setCollapsed(!collapsed)
    }


    console.log('App rendering')
    return (
        <div className="App">
            <PageTitle title={'Hello, samurai! Let\'s go!'}/>
            Article 1
            <Rating value={4}/>
            <PageTitle title={'Menu'}/>
            <Accordion titleValue={'Menu'} collapsed={collapsed} collapsedClick={collapsedClick}/>
            <Accordion titleValue={'Users'} collapsed={collapsed} collapsedClick={collapsedClick}/>
            Article 2
            <Rating value={3}/>
            <OnOffButton/>
        </div>
    );
}

export const OnOffButton = () => {
    const [onOff, setOnOff] = useState()

    function colorButtonAndCircle(value: any) {
        setOnOff(value)
    }

    return (
        <div className='onOffButton'>
            <div>
                <button className={onOff && 'on'} onClick={() => colorButtonAndCircle(true)}>ON</button>
            </div>
            <div>
                <button className={!onOff && 'off'} onClick={() => colorButtonAndCircle(false)}>OFF</button>
            </div>
            <div className={`circle ${onOff && 'on'} ${!onOff && 'off'}`}>
            </div>
        </div>
    )
}

type RatingPropsType = {
    value: number
}

const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        );
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        );
    }
    return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected) {
        return (
            <span><b>star </b></span>
        );
    } else {
        return (
            <span>star </span>
        );
    }
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

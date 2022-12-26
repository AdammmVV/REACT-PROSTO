import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

const App = () => {
  console.log('App rendering')
  return (
      <div className="App">
        <PageTitle title={'Hello, samurai! Let\'s go!'}/>
        Article 1
        <Rating value={4}/>
        <PageTitle title={'Menu'}/>
        <Accordion titleValue={'Menu'}/>
        <Accordion titleValue={'Users'}/>
        Article 2
        <Rating value={3}/>
      </div>
  );
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

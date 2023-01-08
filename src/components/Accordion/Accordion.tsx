import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    collapsedClick: ()=> void
}

const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} collapsedClick={props.collapsedClick}/>
                <AccordionBody />
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue} collapsedClick={props.collapsedClick}/>
            </div>
        )
    }

}

type AccordionTitlePropsType = {
    title: string
    collapsedClick: ()=> void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.collapsedClick}>-- { props.title } --</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;
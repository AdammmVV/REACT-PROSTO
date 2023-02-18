import React, {useReducer} from "react";
import {reducer, TOGGLE_ACCORDION} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrollableAccordion = (props: AccordionPropsType) => {

    const [collapsed, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <UncontrollableAccordionTitle title={props.titleValue} setCollapsed={() => dispatch({type: TOGGLE_ACCORDION})}/>
            {!collapsed.collapsed && <UncontrollableAccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

const UncontrollableAccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={props.setCollapsed}>-- {props.title} --</h3>
}

const UncontrollableAccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
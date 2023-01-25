import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrollableAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <UncontrollableAccordionTitle title={props.titleValue} setCollapsed={() => setCollapsed(!collapsed)}/>
            {!collapsed && <UncontrollableAccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=> void
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
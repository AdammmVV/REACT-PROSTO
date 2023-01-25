import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

const Accordion: React.FC<AccordionPropsType> = ({titleValue, collapsed, setAccordionCollapsed}) => {
    return (
        <div>
            <AccordionTitle title={titleValue} collapsed={collapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, collapsed, setAccordionCollapsed}) => {
    const onClickCollapsedHandler = () => {
        setAccordionCollapsed(!collapsed)
    }

    return <h3 onClick={onClickCollapsedHandler}>-- {title} --</h3>
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
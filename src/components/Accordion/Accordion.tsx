import React, {MouseEvent} from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

export const Accordion: React.FC<AccordionPropsType> = (
    {
        titleValue,
        collapsed,
        setAccordionCollapsed,
    }) => {

    const setAccordionCollapsedHandler = () => {
        setAccordionCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={titleValue}
                            setAccordionCollapsed={setAccordionCollapsedHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = (
    {
        title,
        setAccordionCollapsed
    }) => {
    const onClickCollapsedHandler = (e: MouseEvent<HTMLHeadingElement>) => {
        setAccordionCollapsed()
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
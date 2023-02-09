import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import '../../App.css'
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion
}

export const CollapsedAccordionMood = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={action('change Accordion')} />
export const UncollapsedAccordionMood = () => <Accordion titleValue={'Menu'} collapsed={false} setAccordionCollapsed={action('change Accordion')} />

export const AccordionChanged = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} collapsed={value} setAccordionCollapsed={setValue} />
}

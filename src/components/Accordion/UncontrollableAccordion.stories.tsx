import React from 'react';
import '../../App.css'
import {UncontrollableAccordion} from "./UncontrollableAccordion";

export default {
    title: 'UncontrollableAccordion stories',
    component: UncontrollableAccordion
}

export const UncontrollableAccordionChanged = () => {
    return <UncontrollableAccordion titleValue={'User'} />
}

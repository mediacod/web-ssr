import React from 'react';
import { SectionNav } from '../nav/Nav';
import Section from "./Section";

const Sections: React.FC = () => {
    return (
        <div className={'sectionsContainer'}>
            <Section title={'Музыка'}/>
            <Section title={'Музыка'}/>
            <Section title={'Музыка'}/>
        </div>
    );
};

export default Sections;

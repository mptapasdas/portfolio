import React from "react";

import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
    return (
        <Section id='about'>
            <SectionTitle>About Me</SectionTitle>
            <SectionText>
                A pre-final undergraduate from IIT BHU(Varanasi), adopting new
                technologies and developing awesome web apps
            </SectionText>
            <SectionDivider />
        </Section>
    );
};

export default Timeline;

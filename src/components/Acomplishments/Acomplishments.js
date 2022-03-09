import React from "react";

import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
    { number: 500, text: "DSA Problems from leetcode, gfg etc" },
    { number: 10, text: "Active users of freedemy" },
    { number: 5, text: "Major and minor projects" },
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Achievements</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{`${card.number}+`}</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
        <SectionDivider />
    </Section>
);

export default Acomplishments;

import React from "react";
import Link from "next/link";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    Hey! <br />
                    This is Tapas, a pre-final year engineering undergrad
                    building beautiful, minimal, blazing-fast web apps
                    <br />
                </SectionText>
                <Link href='#contact'>
                    <Button>Contact Me</Button>
                </Link>
            </LeftSection>
        </Section>
    </>
);

export default Hero;

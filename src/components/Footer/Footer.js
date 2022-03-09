import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper id='contact'>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href='tel:+919660491322'>
                        +91 96604 91322
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href='mailto:work.tapas@gmail.com'>
                        work.tapas@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Innovating one project at a time</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons
                        href='https://github.com/mptapasdas'
                        target='_blank'>
                        <AiFillGithub size='3rem' />
                    </SocialIcons>
                    <SocialIcons
                        href='https://www.linkedin.com/in/mptapasdas/'
                        target='_blank'>
                        <AiFillLinkedin size='3rem' />
                    </SocialIcons>
                    <SocialIcons
                        href='https://instagram.com/mptapasdas'
                        target='_blank'>
                        <AiFillInstagram size='3rem' />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;

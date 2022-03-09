import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { resumeLink } from "../../constants/constants";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href='/'>
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginLeft: "1.5rem",
                    }}>
                    <DiCssdeck />
                    <span
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}>
                        Tapas.js
                    </span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href='#projects'>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#tech'>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href='#about'>
                    <NavLink>About</NavLink>
                </Link>
            </li>
            <li>
                <a href={resumeLink} target='_blank'>
                    <NavLink>Resume</NavLink>
                </a>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href='https://github.com/mptapasdas' target='_blank'>
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
        </Div3>
    </Container>
);

export default Header;

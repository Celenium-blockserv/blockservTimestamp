import React from "react";

import {useTranslation} from "react-i18next";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/LogoWEB3.png";
import en from "../../assets/en.png";
import fr from "../../assets/french.png";

import "./header.css"

function Header() {

    const {t, i18n} = useTranslation();
    let preventDoubleClic = new Date().getTime();

    const handleClick = event => {
        if ( (new Date().getTime() - preventDoubleClic) > 200 ) {
            i18n.changeLanguage(event.target.id);
            preventDoubleClic = new Date().getTime();
        }
    };


    const enFlag =
        <>
            <img
                id='en'
                alt=""
                src={en}
                width="20"
                height="13"
                onClick={handleClick}
            />
        </>;

    const frenchFlag =
        <>
            <img
                id='fr'
                alt=""
                src={fr}
                width="20"
                height="13"
                onClick={handleClick}
            />
        </>;

    return (
        <>
            <Navbar className="header-style justify-content-center">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="450"
                        height="150"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="topright">
                    {
                        i18n.language === 'en' ? frenchFlag : enFlag
                    }
                </Nav>
            </Navbar>
            <Navbar variant="light" className="header-style justify-content-center">
                <h2>{t("app_name")}</h2>
            </Navbar>
        </>
    );
}

export default Header;


// import logo from '../../assets/LogoCeleniumWeb3.png';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../LanguageSwitcher";
// import Nav from 'react-bootstrap/Nav';
//
// import "./header.css"
//
// function Header() {
//
//     const { t } = useTranslation();
//
//     return (
//         <>
//             <Navbar bg="dark" variant="dark">
//                 <Container fluid>
//                     <Navbar.Brand href="#home">
//                         <img
//                             alt=""
//                             src={logo}
//                             width="50"
//                             height="50"
//                             className="d-inline-block align-top"
//                         />{' '}
//                         {t("titleMain")}
//                     </Navbar.Brand>
//                     <Nav.Item>
//                         <LanguageSwitcher />
//
//                     </Nav.Item>
//
//                 </Container>
//             </Navbar>
//         </>
//     );
// }
//
// export default Header;


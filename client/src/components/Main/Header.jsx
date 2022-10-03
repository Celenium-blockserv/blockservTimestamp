import logo from '../../assets/LogoCeleniumWeb3.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import Nav from 'react-bootstrap/Nav';
function Header() {

    const { t } = useTranslation();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        {t("titleMain")}
                    </Navbar.Brand>
                    <Nav.Item>
                        <LanguageSwitcher />

                    </Nav.Item>

                </Container>
            </Navbar>
        </>
    );
}

export default Header;


import logo from '../../assets/LogoCeleniumWeb3.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        Celenium Timestamper on Polygon Mainnet
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;


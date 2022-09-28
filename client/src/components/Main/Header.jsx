import logo from '../../assets/LogoCeleniumWeb3.png';


function Header() {
    return (<>
        <div className="header">
            <img  src={logo} height="100px" width="100px" alt="Celenium"/>
            <h1>Celenium notarial services</h1>

        </div>
    </>);
}

export default Header;


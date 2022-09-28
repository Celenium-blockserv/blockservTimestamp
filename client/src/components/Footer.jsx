function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <footer>
      <h2>Contact us</h2>
      <Link uri={"https://celenium.fr"} text={"Celenium"} />

    </footer >
  );
}

export default Footer;

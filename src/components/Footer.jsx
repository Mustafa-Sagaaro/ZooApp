import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="./Logo.png" alt="Logo" />
            </div>
            <div className="footer-links">
                <a href="/">Home</a>
                <a href="/Interaktionen">Interaktionen</a>
                <a href="/News">News</a>
                <a href="/Impressum">Impressum</a>
            </div>
            <div className="footer-copy">
                © Zoo- Zürich
            </div>
        </footer>
    );
};
export default Footer;

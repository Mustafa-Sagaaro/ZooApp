import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="./Logo.png" alt="Logo" />
            </div>
            <div className="footer-links">
                <a href="localhost:5173/Interaktionen">Home</a>
                <a href="localhost:5173/Interaktionen">Interaktionen</a>
                <a href="localhost:5173/News">News</a>
                <a href="localhost:5173/Impressum">Impressum</a>
            </div>
            <div className="footer-copy">
                © Zoo- Zürich
            </div>
        </footer>
    );
};

export default Footer;

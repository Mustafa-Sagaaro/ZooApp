import "../styles/Impressum.css"

function Impressum() {
  return (
    <div className="impressum">
      <h2>IMPRESSUM</h2>
      <section className="contact-address">
        <h3>KONTAKTADRESSE</h3>
        <p>Zoo Zürich AG</p>
        <p>Zürichbergstrasse 221</p>
        <p>8044 Zürich</p>
        <p>Tel: 044 254 25 00</p>
        <p>Email: <a href="mailto:zoo@zoo.ch">zoo@zoo.ch</a></p>
      </section>

      <section className="commercial-register">
        <h3>HANDELSREGISTEREINTRAG</h3>
        <p>Eingetragener Firmenname: Zoo Zürich AG</p>
        <p>Nummer: CHE-101.907.073</p>
      </section>

      <section className="technical-partner">
        <h3>TECHNISCHER PARTNER</h3>
        <p>Frontend- & Backend-Umsetzung:</p>
        <p>Liip AG</p>
        <p>Limmatstrasse 183</p>
        <p>8005 Zürich</p>
        <p>Website: <a href="https://www.liip.ch" target="_blank" rel="noopener noreferrer">liip.ch</a></p>
      </section>
    </div>
  );
}

export default Impressum;

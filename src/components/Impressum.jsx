import "../styles/Impressum.css"

function Impressum() {
  return (
    <div className="impressum">
      <section className="Header">
        <h1>Impressum</h1>
      </section>
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
        <p>BBW</p>
        <p>Teststrasse 183</p>
        <p>8005 Zürich</p>
        <p>Website: <a href="" target="" rel="">Mustafa Sagaaro</a></p>
      </section>
    </div>
  );
}

export default Impressum;

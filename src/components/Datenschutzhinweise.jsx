import'react';
import '../styles/Datenschutzhinweise.css'

const Datenschutzhinweise = () => {
  return (
    <div className='Datenschutz'>
      <h1>Datenschutzerklärung für die Zoo App</h1>
      <p>Willkommen bei der Zoo App. Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie darüber, wie wir mit Ihren personenbezogenen Daten umgehen, wenn Sie unsere App nutzen.</p>

      <h2>Verantwortlicher</h2>
      <p>
        [Zoo App Betreiber / Unternehmen],<br />
        [Adresse],<br />
        [Telefonnummer],<br />
        [E-Mail-Adresse].
      </p>

      <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dies umfasst Informationen wie Ihren Namen, Ihre E-Mail-Adresse, oder Ihre IP-Adresse.</p>

      <h3>Besuch unserer App</h3>
      <p>Sie können unsere App grundsätzlich besuchen, ohne Angaben zu Ihrer Person zu machen. [...]</p>

      <h3>Nutzung von Funktionen unserer App</h3>
      <p>Wenn Sie bestimmte Funktionen unserer App nutzen möchten, z.B. das Kontaktformular, kann es sein, dass die Eingabe von personenbezogenen Daten erforderlich ist. [...]</p>

      <h2>Cookies</h2>
      <p>Unsere App verwendet Cookies. Das sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die bestimmte Einstellungen und Daten zum Austausch mit unserer App über Ihren Browser speichern. [...]</p>

      <h2>Ihre Rechte</h2>
      <p>Sie haben das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten, sowie auf Berichtigung oder Löschung, Einschränkung der Verarbeitung, ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. [...]</p>

      <h2>Änderungen dieser Datenschutzerklärung</h2>
      <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Dienste in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
    </div>
  );
}

export default Datenschutzhinweise;

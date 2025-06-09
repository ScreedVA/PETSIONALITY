import React from "react";
import Footer from "../components/Footer";

const OurConcept = () => {
  return (
    <div className="pt-32 bg-main-green">
      <div className="wrapper max-w-4xl pb-20">
        <h2>Our concept</h2>
        <br />
        <h3>Was PETSONALITY bietet – unsere Dienstleistung</h3>
        <br />
        <p>
          PETSONALITY ist eine Plattform zur smarten Vermittlung von
          Tiersittern, die nicht nur Zeit und Ort, sondern vor allem
          Persönlichkeiten berücksichtigt.
        </p>
        <br />

        <p>
          <h5>Unser Angebot richtet sich an:</h5>
          • Haustierbesitzer, die temporäre Betreuung suchen (Tages-, Urlaubs-
          oder Trainingsvermittlung) <br />
          • Tierliebhaber, die zeitweise Tiere betreuen möchten <br />
          • Professionelle Tiertrainer, die ihre Dienste über unsere Plattform
          anbieten möchten
          <br />
          <br /> Unsere Vermittlung basiert auf einem KI-gestützten
          Persönlichkeitstest, der sowohl die Eigenschaften des Tieres als auch
          die des potenziellen Tiersitters berücksichtigt.
        </p>
        <br />
        <p>
          <h5>Wir bieten:</h5>• Persönliches Matching für Tages-, Urlaubs- oder
          Trainingsbetreuung <br />• Verifizierte Tiersitter mit
          Bewertungssystem und Trusted-Siegel <br />
          • Kontaktaufnahme und Kennenlernen vorab <br />
          • Chatbot-Support und Anleitung für Sitter <br />
          • Verfügbarkeitsabfrage, Bilder-Upload und Feedbacksystem <br />
          • Möglichkeit, über unsere Seite zertifizierte Tiertrainer zu finden
          und zu buchen <br />
        </p>
        <br />
        <h3>Wie unser Matching-Prozess funktioniert</h3>
        <br />
        <p>Unser Matching verläuft in fünf intelligenten Schritten:</p>
        <br />
        <ol className="list-decimal pl-10">
          <li>
            Datenerhebung
            <br />
            <p>
              {" "}
              Tierbesitzer geben Informationen zum Tier an: Art, Rasse,
              Verhalten, Bedürfnisse Tiersitter durchlaufen einen detaillierten
              Persönlichkeitstest und beschreiben ihre Wohn- und Lebenssituation
            </p>
          </li>
          <br />
          <li>
            Datenanalyse <br />
            <p>
              Die KI erstellt Persönlichkeitsprofile für Tier und Sitter auf
              Basis eines psychologischen Tests; Wohnsituation, Erfahrung,
              Umgang mit bestimmten Tierarten fließen mit ein
            </p>
          </li>
          <br />
          <li>
            Matching-Algorithmus <br />
            <p>
              {" "}
              Die Profile werden miteinander abgeglichen Es entsteht eine Liste
              passender Tiersitter in der Region, sortiert nach Übereinstimmung
            </p>
          </li>
          <br />
          <li>
            Kontakt & Buchung
            <br />
            <p>
              Tierbesitzer nehmen Kontakt zu passenden Sittern auf <br />
              Es können Treffen arrangiert und Verfügbarkeiten individuell
              abgeklärt werden Erst nach gegenseitigem Einverständnis erfolgt
              die Buchung
            </p>
          </li>
          <br />
          <li>
            Feedback & Weiterentwicklung <br />
            <p>
              Nach der Betreuung geben beide Seiten Bewertungen ab Die KI nutzt
              dieses Feedback, um sich durch Machine Learning stetig zu
              verbessern
            </p>
          </li>
          <br />
        </ol>

        <br />
        <h3>Sicherheit & Vertrauen</h3>
        <br />
        <p>
          • Jeder Tiersitter wird verifiziert (u.a. Personalausweis,
          Wohnortprüfung) <br />
          • Optional: Führungszeugnis, Wohnungscheck, Trusted-Siegel <br />
          • Sitter erhalten Sternebewertungen in verschiedenen Kategorien <br />
          • Tierbesitzer können alle zwei Tage ein Bild ihres Tieres sehen – für
          ein gutes Gefühl <br />
        </p>
        <br />
        <h3>Mehr als nur Betreuung: gesellschaftliche Wirkung</h3>
        <br />
        <p>
          • Verantwortungsvolle Übergangslösungen für Tiere – weniger
          Tierheimabgaben <br />
          • Einkommensmöglichkeiten für Tiersitter <br />
          • Gleichberechtigte Teilhabe unabhängig von Geschlecht, Alter,
          Herkunft <br />
          • Technologische Innovation für eine soziale Mission <br />
          • Stärkung lokaler Netzwerke und nachhaltiger Betreuungskonzepte{" "}
          <br />• Unsere Plattform unterstützt aktiv die UN-Nachhaltigkeitsziele
          – vom Klimaschutz über Geschlechtergleichheit bis hin zu Gesundheit
          und Wohlergehen.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default OurConcept;

import React from "react";
import Bg from "../assets/images/bgs/4.png";
import { ourBenefits, reviews, team } from "../components/Data";
import ReviewBox from "../components/ReviewBox";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-main-green">
      <div className="relative bg-white">
        <img
          src={Bg}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
          alt=""
        />
        <div className="wrapper sm:pt-40 pt-32 pb-60 xl:px-28">
          <h2>Unsere Vision und Mission</h2>
          <h4 className="max-w-4xl mt-5">
            Unser Ziel ist es, mit PETSONALITY eine intelligente, sichere und
            benutzerfreundliche Plattform zu schaffen, die Tierbesitzern hilft,
            den perfekten Tiersitter zu finden – basierend auf einem innovativen
            Matching-System, das persönliche Eigenschaften und tierische
            Bedürfnisse in Einklang bringt.
          </h4>
        </div>
      </div>

      <div className="wrapper flex justify-center xl:gap-16 gap-6 -translate-y-32 xl:px-28 flex-wrap lg:flex-nowrap">
        {ourBenefits.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-beige text-center px-6 py-10 max-w-sm">
              <div className="flex items-center justify-center bg-main-green rounded-full w-40 h-40 p-10 mx-auto">
                <img src={item.icon} alt="" />
              </div>
              <h4 className="mt-5 mb-10 whitespace-nowrap">{item.title}</h4>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </div>

      <div className="wrapper xl:px-28 pb-20 ">
        <p className="sm:text-lg">
          Wir wollen eine Lösung für ein weit verbreitetes Problem bieten:
          Tierbesitzer stehen oft vor der Frage, wohin mit dem Tier, wenn sie in
          den Urlaub fahren, beruflich eingespannt oder krank sind. Herkömmliche
          Pensionen bieten selten individuelle Betreuung – wir hingegen bieten
          eine persönliche und abgestimmte Alternative.
          <br />
          <br />
          Dabei ermöglichen wir nicht nur sorglose Betreuung für Tierbesitzer,
          sondern auch eine erfüllende Tätigkeit für Tierliebhaber, die Tiere
          aufnehmen möchten – sei es für Nebenverdienst, emotionale Verbindung
          oder als Einstieg in ein Leben mit Tier.
          <br />
          <br />
          Unsere Vision ist eine zukunftsfähige Haustierbetreuung, bei der sich
          die Bedürfnisse aller Beteiligten – ob Mensch oder Tier – ideal
          ergänzen.
          <br />
          <br />
          <h4>Wofür wir stehen</h4>
          <br /> Bei PETSONALITY steht das Wohl der Tiere, die Stärkung
          zwischenmenschlicher und tierischer Bindungen und eine nachhaltige,
          smarte Lösung im Mittelpunkt. Wir glauben, dass jedes Haustier ein
          temporäres Zuhause verdient, das nicht nur funktional, sondern
          liebevoll, empathisch und individuell ist. Unser innovativer Ansatz
          verbindet moderne Technologie mit echter Tierliebe – für mehr
          Lebensqualität bei Mensch und Tier.
          <br />
          <br />
          Unsere Werte: <br />
          • Tierwohl – im Zentrum all unseres Handelns <br />• Empathie &
          Verantwortung – für Tiere, ihre Halter und Tiersitter <br />
          • Innovation & Transparenz – durch moderne Technik und
          nachvollziehbare Prozesse <br />
          • Nachhaltigkeit & Gemeinschaft – durch lokale Vermittlung,
          Ressourcenschonung und starke Partnerschaften <br />
          <br />
          <br />
          PETSONALITY ist mehr als eine Plattform – wir sind eine Bewegung hin
          zu einem verantwortungsvolleren und passenderen Umgang mit
          Haustierbetreuung.
          <br />
          <br />
          <h4>Wer wir sind</h4>
          <br />
          Hinter PETSONALITY steht ein engagiertes Gründerteam, das aus eigener
          Erfahrung weiß, wie schwer es sein kann, eine vertrauensvolle
          Betreuung für das eigene Tier zu finden. Die Idee entstand im Rahmen
          eines Hochschulprojekts – doch die Motivation dahinter ist tief
          verwurzelt in unserer persönlichen Tierliebe.
          <br />
          <br />
          Wir sind selbst Tierhalter, wissen um die Herausforderungen im Alltag,
          aber auch um den Wunsch, das eigene Tier stets gut aufgehoben zu
          wissen.
          <br />
          <br />
          Unsere Stärke? Wir denken aus Kundenperspektive, leben Empathie,
          vereinen digitale Kompetenzen mit sozialem Gespür – und haben den
          Anspruch, ein Angebot zu schaffen, das technologisch stark und
          gleichzeitig herzensnah ist.
        </p>
      </div>

      <h2 className="text-center mb-16">Team</h2>
      <div className="wrapper flex justify-center gap-6  flex-wrap lg:flex-nowrap max-w-2xl pb-28 ">
        {team.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-beige text-center lg:w-1/2 w-full rounded-xl overflow-hidden pb-10 max-w-sm">
              <div className="img flex items-center justify-center  w-full h-80">
                <img src={item.img} alt="" />
              </div>
              <h4 className="mt-5 mb-5 whitespace-nowrap">{item.name}</h4>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>

      <h2 className="text-center mb-16">Reviews</h2>
      <div className="wrapper xl:px-28 pb-20  gap-10 grid md:grid-cols-2">
        {reviews.map((item, index) => {
          return (
            <ReviewBox
              key={index}
              stars={item.stars}
              paragraph={item.text}
              name={item.name}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

import React from "react";
import Footer from "../components/Footer";

const OurConcept = () => {
  return (
    <div className="pt-32 bg-main-green">
      <div className="wrapper max-w-4xl pb-20">
        <h2>Our concept</h2>
        <br />
        <h3>What PETSONALITY offers - our service</h3>
        <br />
        <p>
          PETSONALITY is a platform for the smart placement of pet sitters that
          takes into account not only time and place, but above all
          personalities.
        </p>
        <br />

        <p>
          <h5>Our offer is aimed at:</h5>
          Pet owners looking for temporary care (day, vacation or training
          placement) Animal lovers who would like to look after animals
          temporarily Professional animal trainers who would like to offer their
          services via our platform.
          <br />
          <br /> Our placement service is based on an AI-supported personality
          test that takes into account the characteristics of both the animal
          and the potential pet sitter.
        </p>
        <br />
        <p>
          <h5>We offer:</h5>
          Personal matching for day-, vacation- or training care Verified pet
          sitters with a rating system and trusted seal Contacting and getting
          to know each other in advance Chatbot support and guidance for sitters
          Availability query, picture upload and feedback system Possibility to
          find and book certified pet trainers via our website
        </p>
        <br />
        <h3>How our matching process works</h3>
        <br />
        <p>Our matching process consists of five intelligent steps:</p>
        <br />
        <ol className="list-decimal pl-10">
          <li>
            data collection <br />
            <p>
              {" "}
              Pet owners provide information about the pet: Species, breed,
              behavior, needs Pet sitters complete a detailed personality test
              and describe their home and living situation
            </p>
          </li>
          <br />
          <li>
            data analysis <br />
            <p>
              The AI creates personality profiles for the animal and sitter
              based on a psychological test; living situation, experience,
              handling of certain animal species are taken into account
            </p>
          </li>
          <br />
          <li>
            matching algorithm <br />
            <p>
              {" "}
              The profiles are compared with each other <br />A list of suitable
              pet sitters in the region is created, sorted by accuracy of fit
            </p>
          </li>
          <br />
          <li>
            contact & booking <br />
            <p>
              Pet owners make contact with suitable sitters <br />
              Meetings can be arranged and availability clarified individually
              The booking is only made after mutual agreement
            </p>
          </li>
          <br />
          <li>
            Feedback & further development <br />
            <p>
              After the care, both sides give ratings The AI uses this feedback
              to continuously improve itself through machine learning
            </p>
          </li>
          <br />
        </ol>

        <br />
        <h3>Security & trust</h3>
        <br />
        <p>
          PETSONALITY attaches great importance to trust and safety: <br />
          Every pet sitter is verified (e.g. ID card, residence check) <br />
          Optional: certificate of good conduct, home check, trusted seal <br />
          Sitters receive star ratings in various categories <br />
          Pet owners can see a picture of their pet every two days - for a good
          feeling
        </p>
        <br />
        <h3>More than just care: social impact</h3>
        <br />
        <p>
          With PETSONALITY we create: <br />
          Responsible transitional solutions for animals - fewer shelter fees{" "}
          <br />
          Income opportunities for pet sitters <br />
          Equal participation regardless of gender, age, origin <br />
          Technological innovation for a social mission <br />
          Strengthening local networks and sustainable care concepts
        </p>
        <br />
        <p>
          Our platform actively supports the UN Sustainable Development Goals -
          from climate protection and gender equality to health and wellbeing.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default OurConcept;

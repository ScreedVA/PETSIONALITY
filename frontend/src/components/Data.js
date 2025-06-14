import logo from "../assets/images/logo/1.png";
import logo2 from "../assets/images/logo/1.jpeg";
import logo3 from "../assets/images/logo/1.jpg";
import logo4 from "../assets/images/logo/1.webp";
import Toe1 from "../assets/images/pets/1.webp";
import Toe2 from "../assets/images/pets/2.avif";
import Toe3 from "../assets/images/pets/3.jpg";
import Toe4 from "../assets/images/pets/4.jpeg";
import Video1 from "../assets/videos/paw/1.mp4";
import Video2 from "../assets/videos/paw/2.mp4";
import Video3 from "../assets/videos/paw/3.mp4";
import Video4 from "../assets/videos/paw/4.mp4";
import Trainer1 from "../assets/images/trainers/1.png";
import Trainer2 from "../assets/images/trainers/2.png";
import Trainer3 from "../assets/images/trainers/3.png";

import role1 from "../assets/images/pets/4.jpg";
import role2 from "../assets/images/pets/5.jpg";
import role3 from "../assets/images/pets/6.jpg";
import bg1 from "../assets/images/bgs/2.png";
import img1 from "../assets/images/pets/3.png";
import img2 from "../assets/images/other/1.jpg";
import img3 from "../assets/images/other/2.jpg";
import img4 from "../assets/images/other/3.jpg";
import img5 from "../assets/images/other/4.jpg";
import img6 from "../assets/images/other/5.jpg";
import img7 from "../assets/images/other/6.jpg";
import img8 from "../assets/images/other/7.jpg";
import img9 from "../assets/images/other/8.jpg";
import img10 from "../assets/images/other/9.jpg";
import pet1 from "../assets/images/pets/7.jpg";
import pet2 from "../assets/images/pets/8.jpg";
import pet3 from "../assets/images/pets/9.jpg";
import Lena from "../assets/images/team/Lena.jpg";
import Judith from "../assets/images/team/Judith.png";
import UserIcon from "../assets/images/icons/user.png";
import BoneIcon from "../assets/images/icons/bone.png";
import DocIcon from "../assets/images/icons/doc.png";

import {
  faUser,
  faDog,
  faComment,
  faClipboard,
  faPaw,
  faCat,
} from "@fortawesome/free-solid-svg-icons";
// import { name } from "ejs";

export const homeVideos = [Video1, Video4, Video3, Video2];

export const logos = [logo, logo2, logo3, logo4];

export const roles = [role1, role2, role3];

export const bgs = [bg1];

export const imgs = [img1, img2];

export const navigations = [
  // {
  //   link: "/",
  //   text: "Home",
  // },
  {
    link: "/",
    text: "Petsitting",
    dropdown: [
      {
        link: "/pet-sitters",
        text: "Sitters",
      },
      {
        link: "/pet-owners",
        text: "Owners",
      },
      {
        link: "/pet-trainers",
        text: "Trainers",
      },
    ],
  },
  // {
  //   link: "/animal-agency",
  //   text: "Animal Agancy",
  // },
  {
    link: "/pet-shops",
    text: "Shops",
  },
  {
    link: "/",
    text: "Company",
    dropdown: [
      {
        link: "/about-us",
        text: "About us",
      },
      {
        link: "/our-concept",
        text: "Our concept",
      },
      {
        link: "/faq",
        text: "FAQs",
      },
    ],
  },

  {
    link: "/contact",
    text: "Contact",
  },
];

export const toes = [
  {
    link: "/pet-sitters",
    img: Toe1,
    label: "Sitters",
  },
  {
    link: "/pet-owners",
    img: Toe2,
    label: "Owners",
  },
  {
    link: "/pet-trainers",
    img: Toe3,
    label: "Trainers",
  },
  {
    link: "/pet-shops",
    img: Toe4,
    label: "Shops",
  },
];

export const optionsOwner = [
  {
    icon: faUser,
    label: "User Info",
  },
  {
    icon: faDog,
    label: "My Pets",
  },
  // {
  //   icon: faComment,
  //   label: "My Sitters",
  // },
];

export const options2 = [
  {
    icon: faUser,
    label: "User Info",
  },
  {
    icon: faCat,
    label: "Sitter Info",
  },
  {
    icon: faClipboard,
    label: "Services",
  },
];

export const options3 = [
  {
    icon: faUser,
    label: "User Info",
  },
  {
    icon: faPaw,
    label: "Trainer Info",
  },
];

export const tabOptions4 = [
  {
    icon: faUser,
    label: "User Info",
  },
  {
    icon: faDog,
    label: "My Pets",
  },
  {
    icon: faClipboard,
    label: "Services",
  },
  {
    icon: faPaw,
    label: "Trainer Info",
  },
];

export const petList = [
  {
    name: "Luna",
    species: "Dog",
    breed: "Siberian Husky",
    gender: "Female",
    size: "medium-large",
    weight: "50 Ibs",
    yob: 2020,
    "spayed/neutered": true,
    microchipped: true,
    vaccinations: true,
    description:
      "Luna is a spirited and intelligent Husky with a big personality and an even bigger heart....",
    img: pet3,
    showDetails: false,
  },
  {
    name: "Pickles",
    species: "Cat",
    breed: "Ragdoll",
    gender: "Male",
    size: "medium",
    yob: 2021,
    microchipped: true,
    vaccinations: true,
    description:
      "Pickles is an elegant and independent feline with a love for sunbeams and quiet corners. She’s low...",
    img: pet2,
    showDetails: false,
  },
  {
    name: "Rusty",
    species: "Dog",
    breed: "Golden Retriever Mix",
    size: "Large",
    weight: "68 Ibs",
    yob: 2018,
    "spayed/neutered": true,
    microchipped: true,
    vaccinations: true,
    description:
      "Rusty is a goofy, tail-wagging golden retriever mix who lives for belly rubs and mud....",
    img: pet1,
    showDetails: false,
  },
];

export const notifications = [
  {
    header: "Pet Sitter in your area",
    body: "Luna just joined and has 5-star reviews for caring for cats and dogs. Check her profile now!",
    date: "2 week ago",
  },
  {
    header: "Booking Reminder",
    body: "You have a meet-up with Alex to discuss care for Bella. Don’t forget her favorite treats!",
    date: "1 week ago",
  },
  {
    header: "Your Pet Sitter Sent an Update!",
    body: "Jess just uploaded photos of Max on his walk. Looks like he’s loving it! 🐶📸",
    date: "2 days ago",
  },
  {
    header: "Time to Leave a Review!",
    body: "How was your experience with Sam? Share a quick review to help other pet owners.",
    date: "4 days ago",
  },
  {
    header: "Your Favorite Sitter is Now Available!",
    body: "Great news! Kim is available next weekend. Book now before her schedule fills up.",
    date: "4 weeks ago",
  },
  {
    header: "Your Booking is Confirmed!",
    body: "You’re all set! Emma will be caring for Oliver from April 20–22. You can message her anytime.",
    date: "2 weeks ago",
  },
  {
    header: "Vaccination Reminder",
    body: "Is Luna due for her shots? Keeping her up-to-date helps keep everyone safe—sitters included!",
    date: "3 weeks ago",
  },
];

export const messages = [
  {
    header: "Emily",
    body: "Hi there! I'd love to care for Daisy this weekend. I have experience with senior dogs and can give her meds too",
    profileImg: img4,
    date: "2 weeks ago",
  },
  {
    header: "Mark",
    body: "Thanks for booking me! Looking forward to meeting you and Bruno tomorrow. Let me know if he has any allergies 🐾",
    profileImg: img7,
    date: "1 week ago",
  },
  {
    header: "Jess",
    body: "Here’s a quick update: Bella just had her walk and a snack. She’s napping now—total angel 😇",
    profileImg: img3,
    date: "3 weeks ago",
  },
  {
    header: "Casey",
    body: "Hey! I’m available for the full week you requested. Let me know if you'd like to schedule a meet & greet!",
    profileImg: img5,
    date: "2 days ago",
  },
  {
    header: "Lara",
    body: "Just wanted to say thanks again for trusting me with Pepper. She was such a sweetheart!",
    profileImg: img6,
    date: "4 days ago",
  },
  {
    header: "Nina",
    body: "Good morning! I'm running 10 minutes early for our meet-up. Should I wait outside or come to the door?",
    profileImg: img8,
    date: "5 days ago",
  },
  {
    header: "Sam",
    body: "Here are a few photos from today’s visit—Leo was all zoomies and cuddles! 📸🐶",
    profileImg: img10,
    date: "1 day ago",
  },
];

export const ownerOfferBoxes = [
  {
    link: "/job-offer",
    img: pet1,
    petname: "Peanut",
    title: "🐾 Weekend Pet Sitter Needed for Lovable Golden Retriever!",
    paragraph:
      "We're looking for a trustworthy and animal-loving individual to care for our friendly Golden Retriever, Max, over the weekends. Duties include walks, feeding, and some cuddle time! Located in a quiet neighborhood with parks nearby. Experience preferred, but not required—just a genuine love for dogs!",
  },
  {
    link: "/job-offer",
    img: pet2,
    petname: "Caroline",
    title: "🐶🐾 House + Pet Sitting in Exchange for Free Stay (1 Week)",
    paragraph:
      "Going out of town and need someone to watch over our home and two small dogs. You'll get free accommodation in a cozy house in exchange for daily walks, feeding, and keeping them company. Dates: June 10–17. Ideal for responsible, pet-loving individuals looking for a change of scenery.",
  },
  {
    link: "/job-offer",
    img: pet3,
    petname: "Oreo",
    title: "🐱 Cat-Savvy Sitter Wanted for Two Playful Kitties (3 Days a Week)",
    paragraph:
      "Milo and Luna are two curious and affectionate indoor cats who need care while we're at work. Tasks include feeding, litter box cleaning, and playtime. Flexible scheduling—ideal for a student or remote worker. Must be reliable and comfortable with cats!",
  },
];

export const trainerBoxes = [
  {
    link: "/single-trainer",
    img: Trainer1,
    name: "William Butcher",
    location: "Berlin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum quibusdam repellat laudantium odio molestias nesciunt enim itaque iste tempore a dolore officiis accusantium fugiat,",
    rating: "5.0",
    price: "15",
  },
  {
    link: "/single-trainer",
    img: Trainer2,
    name: "Daenerys Targaryen",
    location: "Hamburg",
    text: "consectetur adipisicing elit. Dolorem laborum quibusdam repellat laudantium odio molestias nesciunt enim itaque iste tempore a dolore officiis accusantium fugiat,",
    rating: "5.0",
    price: "55",
  },
  {
    link: "/single-trainer",
    img: Trainer3,
    name: "Gustavo Fring",
    location: "Frankfurt",
    text: "amet consecteturrem laborum quibusdam repellat laudantiumempore a dolLorem ipsum dolor sitore offi adipisicing elit. Dolociis accusantium fugiat, odio molestias nesciunt enim itaque iste t",
    rating: "4.9",
    price: "29",
  },
];

export const trainingSpecialities = [
  {
    label: "Obedience Training (Basic/Advanced)",
    name: "obedienceTraining",
  },
  {
    label: "Puppy-Training",
    name: "puppyTraining",
  },
  {
    label: "Behavorial-Issues",
    name: "behavorialIssues",
  },
  {
    label: "Aggression/Reactivity",
    name: "aggressionReactivity",
  },
  {
    label: "Seperation-Anxiety",
    name: "seperationAnxiety",
  },
  {
    label: "Leash-Training",
    name: "leashTraining",
  },
  {
    label: "Potty-Training",
    name: "pottyTraining",
  },
  {
    label: "Trick-Training",
    name: "trickTraining",
  },
  {
    label: "Therapy/Emotional-Support-Animal-Prep",
    name: "therapy",
  },
  {
    label: "Service-Dog-Training",
    name: "serviceDogTraining",
  },
  {
    label: "Gaurd-Dog-Training",
    name: "gaurdDogTraining",
  },
  {
    label: "Clicker-Training",
    name: "clickerTraining",
  },
  {
    label: "Agility/Sports-Training",
    name: "agilityTraining",
  },
];

export const serviceOptions = [
  {
    label: "In-person-at-Trainer's-Location",
    name: "inPersonAtTrainersLocation",
  },
  {
    label: "In-person-at-Client's-Location",
    name: "inPersonAtClientLocation",
  },
  {
    label: "Group-Classes",
    name: "groupClasses",
  },
  {
    label: "Online/Virtual-Training",
    name: "onlineTraining",
  },
];

export const servicePage = {
  dogBoarding: {
    active: false,
    showDetails: false,
  },
  doggyDaycare: {
    active: false,
    showDetails: false,
  },
  dropInVisits: {
    active: false,
    showDetails: false,
  },
  dogWalking: {
    active: false,
    showDetails: false,
  },
};

export const ourBenefits = [
  {
    icon: UserIcon,
    title: "AI-Powered Matching",
    paragraph:
      "Our AI system matches pet owners with sitters based on your pet’s needs and preferences for a perfect fit.",
  },
  {
    icon: BoneIcon,
    title: "Trusted Sitters",
    paragraph:
      "All sitters are verified and background-checked for your pet’s safety and peace of mind.",
  },
  {
    icon: DocIcon,
    title: "Hassle-Free Booking",
    paragraph:
      "Book a sitter in minutes with our easy-to-use platform, designed for your convenience.",
  },
];

export const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.sitatibus essLorem ipsum, dolor sit amet consectetur adipisicing elit. Necessit.",
    name: "Jane Doemington",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: "Neces orem ipsum, dolor sit amet consectetur adipisicing elit.sitatibus essLorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus essisicing elit. Necessitatibus ess",
    name: "Jane Doe",
  },
];

export const questions = [
  {
    q: "🐾 1. Wie finde ich den passenden Tiersitter für mein Haustier?",
    a: "Nachdem du dein Tierprofil ausgefüllt hast, schlägt dir unser intelligentes Matching-System passende Tiersitter aus deiner Umgebung vor. Dabei fließen sowohl Persönlichkeitsmerkmale als auch Lebensumstände und Tierbedürfnisse mit ein. Du kannst die vorgeschlagenen Profile durchstöbern und direkt Kontakt aufnehmen.",
  },
  {
    q: "🧪 2. Wie funktioniert der Persönlichkeitstest und wozu ist er gut?",
    a: "Unser Persönlichkeitstest für Tiersitter basiert auf dem wissenschaftlich fundierten Fünf-Faktoren-Modell (Big Five). Die Ergebnisse helfen uns, Sitter mit passenden Tieren zusammenzubringen – so entsteht eine harmonische und stressfreie Betreuung für Tier und Mensch.",
  },
  {
    q: "🔐 3. Wie stellt ihr sicher, dass Tiersitter vertrauenswürdig sind?",
    a: "Alle Sitter durchlaufen einen Prüfprozess: Wir checken Ausweisdokumente, Angaben zur Wohnsituation und auf Wunsch auch polizeiliche Führungszeugnisse. Besonders vertrauenswürdige Profile werden mit einem „Trusted“-Siegel gekennzeichnet – zusätzlich helfen Bewertungen vorheriger Tierbesitzer bei der Entscheidung.",
  },
  {
    q: "💬 4. Was passiert, wenn ein Tiersitter kurzfristig absagt?",
    a: "Sollte es doch einmal zu einer Absage kommen, setzen wir alles daran, schnellstmöglich eine geeignete Alternative zu finden. In bestimmten Fällen bemühen wir uns zusätzlich um einen finanziellen Ausgleich, damit du nicht auf den Kosten sitzen bleibst.",
  },
  {
    q: "💼 5. Kann ich als Tiersitter auch Geld verdienen?",
    a: "Ja! Du kannst dir mit deiner Tierliebe flexibel etwas dazuverdienen. Die Vermittlung erfolgt privat, die genauen Konditionen (z. B. Vergütung) werden individuell zwischen dir und dem Tierbesitzer abgestimmt. PETSONALITY erhebt lediglich eine Vermittlungsgebühr.",
  },
  {
    q: "🐕 6. Welche Tiere kann ich über PETSONALITY betreuen oder betreuen lassen?",
    a: "Unsere Plattform ist offen für alle Haustierarten – egal ob Hund, Katze, Kaninchen oder Papagei. Wichtig ist nur, dass im Profil alle relevanten Infos (z. B. Bedürfnisse, Verhalten, Gesundheit) eingetragen sind, damit ein gutes Matching möglich ist.",
  },
];

export const team = [
  {
    img: Lena,
    name: "Lena",
    info: "Co-Founder",
  },
  {
    img: Judith,
    name: "Judith",
    info: "Co-Founder",
  },
];

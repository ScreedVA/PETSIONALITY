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

import { faUser, faDog, faComment } from "@fortawesome/free-solid-svg-icons";
import { name } from "ejs";

export const navigations = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/",
    text: "Services",
    dropdown: [
      {
        link: "/pet-owners",
        text: "Pet Owners",
      },
      {
        link: "/pet-sitters",
        text: "Sitters",
      },
      {
        link: "/",
        text: "Trainers",
      },
      {
        link: "/",
        text: "Shops",
      },
    ],
  },
  {
    link: "/",
    text: "About us",
  },
  {
    link: "/",
    text: "Community",
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
    link: "/",
    img: Toe2,
    label: "Owners",
  },
  {
    link: "/",
    img: Toe3,
    label: "Trainers",
  },
  {
    link: "/",
    img: Toe4,
    label: "Shops",
  },
];

export const options1 = [
  {
    icon: faUser,
    label: "User Info",
  },
  {
    icon: faDog,
    label: "My Pets",
  },
  {
    icon: faComment,
    label: "My Sitters",
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
    description: "Luna is a spirited and intelligent Husky with a big personality and an even bigger heart....",
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
    description: "Rusty is a goofy, tail-wagging golden retriever mix who lives for belly rubs and mud....",
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

export const homeVideos = [Video1, Video2, Video3, Video4];

export const logos = [logo, logo2, logo3, logo4];

export const roles = [role1, role2, role3];

export const bgs = [bg1];

export const imgs = [img1, img2];

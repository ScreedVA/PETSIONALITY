import logo from "../assets/images/logo/1.png";
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
import pet1 from "../assets/images/pets/7.jpg";
import pet2 from "../assets/images/pets/8.jpg";
import pet3 from "../assets/images/pets/9.jpg";

import { faUser, faDog, faMessage } from "@fortawesome/free-solid-svg-icons";
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

export const homeVideos = [Video1, Video2, Video3, Video4];

export const logos = [logo];

export const roles = [role1, role2, role3];

export const bgs = [bg1];

export const imgs = [img1, img2];

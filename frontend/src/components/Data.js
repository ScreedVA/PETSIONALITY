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

export const homeVideos = [Video1, Video2, Video3, Video4];

export const roles = [role1, role2, role3];

export const bgs = [bg1];

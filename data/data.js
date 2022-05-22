import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

// slider options
export const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

// socialLinks
export const socialLinks = [
  {
    id: 1,
    icon: <IoLogoGithub style={{ color: "#5E5F61" }} />,
    name: "GitHub",
    link: "https://github.com/abdulkadirMete",
  },

  {
    id: 2,
    icon: <IoLogoWhatsapp style={{ color: "#22C55E" }} />,
    name: "Whatsapp",
    link: "http://wa.me/905434882872",
  },
  {
    id: 3,
    icon: <IoLogoYoutube style={{ color: "#EF4444" }} />,
    name: "YouTube",
    link: null,
  },
  {
    id: 4,
    icon: <IoLogoTwitter style={{ color: "#3B82F6" }} />,
    name: "Twitter",
    link: null,
  },
  {
    id: 5,
    icon: <IoLogoLinkedin style={{ color: "#1E40AF" }} />,
    name: "LinkedIn",
    link: null,
  },
];

export const apiUrl = "http://localhost:3001/api";

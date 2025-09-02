import siteLogo from "@/assets/site-logo.svg";
import heroImage from "@/assets/hero-image.png";

export default {
  hero: {
    title: {
      text: "New card game",
      class: "",
    },
    subtitle: `We present you a new card game — First Hunter. It develops horizons and deep thinking. From the age of 8`,
    button: {
      title: "Get Stated",
      href: "#get-started",
      class: "",
    },
    image: {
      src: heroImage,
      alt: "hero-image",
    },
    bgGradient: {
      class: "",
    },
  },
  nav: {
    logo: siteLogo,
    links: [
      {
        title: "About",
        href: "#about",
      },
      {
        title: "Features",
        href: "#features",
      },
      {
        title: "Pricing",
        href: "#pricing",
      },
      {
        title: "Gallery",
        href: "#gallery",
      },
      {
        title: "Team",
        href: "#team",
      },
    ],
    linkStyle: {
      classes: {
        fontFamily: "font-roboto",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        fontColor: "#000000",
      },
    },
    action: {
      button: {
        label: "Download",
        classes: {
          fontSize: "text-sm",
          fontColor: "text-white",
        },
      },
    },
  },
};

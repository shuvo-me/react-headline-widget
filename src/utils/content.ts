import siteLogo from "@/assets/site-logo.svg";
import heroImage from "@/assets/hero-image.png";

export default {
  hero: {
    title: {
      text: "New card game",
      classes: {
        fontFamily: "font-roboto",
        fontSize: "text-4xl",
        fontWeight: "font-bold",
        fontColor: "#000000",
      },
      animation: {
        class: "fade-in",
      },
    },
    subtitle: {
      text: `We present you a new card game — First Hunter. It develops horizons and deep thinking. From the age of 8`,
      classes: {
        fontFamily: "font-roboto",
        fontSize: "text-4xl",
        fontWeight: "font-bold",
        fontColor: "#000000",
      },
      animation: {
        class: "fade-in",
      },
    },
    button: {
      title: "Get Stated",
      href: "#get-started",
      classes: {
        fontFamily: "font-roboto",
        fontSize: "text-sm",
        fontWeight: "font-normal",
        fontColor: "#000000",
        bgColor: "#FFFFFF",
      },
      animation: {
        class: "fade-in",
      },
    },
    image: {
      src: heroImage,
      alt: "hero-image",
      animation: {
        class: "zoom-in",
      },
    },
    bgGradient: {
      style: {
        background: `linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)`,
      },
      show: true,
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

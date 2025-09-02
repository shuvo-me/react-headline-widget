import InputFontSize from "./InputFontSize";
import InputFontFamily from "./InputFontFamily";
import Input from "./Input";
import InputFontWeight from "./InputFontWeight";
import TextArea from "./TextArea";
import InputAnimation from "./InputAnimtaion";
import { useState } from "react";
import { useAppStore } from "../store/AppStoreProvider";

const UpdateStyle = () => {
  const { content, setContent } = useAppStore();
  const { nav, hero } = content;

  const [navStyles, setNavStyles] = useState(() => ({
    ...nav.linkStyle,
    ...nav.action,
  }));

  const handleUpdateNavStyle = () => {
    setContent((prevContent) => ({
      ...prevContent,
      nav: {
        ...prevContent.nav,
        linkStyle: {
          ...prevContent.linkStyle,
          classes: {
            ...navStyles.classes,
          },
        },
        action: {
          button: { ...navStyles.button },
        },
      },
    }));
  };

  console.log({ navStyles });
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h4 className="font-bold">Nav Items</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <InputFontSize
            value={navStyles.classes.fontSize}
            label="Change links font size"
            id="link-font-size"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setNavStyles((prevStyle) => ({
                ...prevStyle,
                classes: {
                  ...prevStyle.classes,
                  fontSize: event.target.value,
                },
              }));
            }}
          />
          <InputFontFamily
            value={navStyles.classes.fontFamily}
            label="Change links font family"
            id="link-font-family"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setNavStyles((prevStyle) => ({
                ...prevStyle,
                classes: {
                  ...prevStyle.classes,
                  fontFamily: event.target.value,
                },
              }));
            }}
          />
          <InputFontWeight
            value={navStyles.classes.fontWeight}
            label="Change links font weight"
            id="link-font-weight"
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setNavStyles((prevStyle) => ({
                ...prevStyle,
                classes: {
                  ...prevStyle.classes,
                  fontWeight: event.target.value,
                },
              }));
            }}
          />
          <Input
            value={navStyles.classes.fontColor}
            type="color"
            label="Change link color"
            id="link-color"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNavStyles((prevStyle) => ({
                ...prevStyle,
                classes: {
                  ...prevStyle.classes,
                  fontColor: event.target.value,
                },
              }));
            }}
          />
          <Input
            value={navStyles.button.label}
            type="text"
            label="Change button Text"
            id="nav-button"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNavStyles((prevStyle) => ({
                ...prevStyle,
                button: {
                  ...prevStyle.button,
                  label: event.target.value,
                },
              }));
            }}
          />
        </div>
        <button
          onClick={handleUpdateNavStyle}
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded text-center cursor-pointer"
        >
          {" "}
          Update{" "}
        </button>
      </section>

      <hr className=" border border-gray-300" />

      <section className="space-y-4">
        <h4 className="font-bold">Hero Items</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <InputFontSize
            label="Change hero title font size"
            id="hero-title-font-size"
            onChange={() => {}}
          />
          <InputFontFamily
            label="Change hero title font family"
            id="hero-title-font-family"
            onChange={() => {}}
          />
          <InputFontWeight
            label="Change hero title font weight"
            id="hero-title-font-weight"
            onChange={() => {}}
          />
          <Input
            type="color"
            label="Change hero title color"
            id="hero-title-color"
            onChange={() => {}}
          />
          <Input
            type="text"
            label="Change hero button Text"
            id="nav-button"
            onChange={() => {}}
          />
          <Input
            type="color"
            label="Change hero button bg color"
            id="nav-button"
            onChange={() => {}}
          />
          <TextArea
            label="Change hero subtile text"
            onChange={() => {}}
            id="hero-subtitle-text"
          />
          <InputAnimation
            id="header-title-animation"
            label="Select animation for header tile"
            onChange={() => {}}
          />
          <Input
            type="text"
            id="hero-bg-gradient-color"
            label="Change hero bg gradient color"
            onChange={() => {}}
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded text-center cursor-pointer"
        >
          {" "}
          Update{" "}
        </button>
      </section>
    </div>
  );
};

export default UpdateStyle;

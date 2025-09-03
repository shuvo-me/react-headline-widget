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

  const [heroStyles, setHeroStyles] = useState(() => ({
    ...hero,
  }));

  const handleUpdateNavStyle = () => {
    setContent((prevContent) => ({
      ...prevContent,
      nav: {
        ...prevContent.nav,
        linkStyle: {
          ...prevContent.nav.linkStyle,
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

  const handleUpdateHeroStyles = () => {
    setContent((prevContent) => ({
      ...prevContent,
      hero: {
        ...heroStyles,
      },
    }));
  };

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
        <div className=" space-y-6">
          <div className="space-y-4">
            <h4 className=" font-semibold">Title</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <InputFontSize
                value={heroStyles.title.classes.fontSize}
                label="Change hero title font size"
                id="hero-title-font-size"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    title: {
                      ...prevStyles.title,
                      classes: {
                        ...prevStyles.title.classes,
                        fontSize: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontFamily
                value={heroStyles.title.classes.fontFamily}
                label="Change hero title font family"
                id="hero-title-font-family"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    title: {
                      ...prevStyles.title,
                      classes: {
                        ...prevStyles.title.classes,
                        fontFamily: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontWeight
                value={heroStyles.title.classes.fontWeight}
                label="Change hero title font weight"
                id="hero-title-font-weight"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    title: {
                      ...prevStyles.title,
                      classes: {
                        ...prevStyles.title.classes,
                        fontWeight: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <Input
                value={heroStyles.title.classes.fontColor}
                type="color"
                label="Change hero title color"
                id="hero-title-color"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    title: {
                      ...prevStyles.title,
                      classes: {
                        ...prevStyles.title.classes,
                        fontColor: e.target.value,
                      },
                    },
                  }));
                }}
              />

              <InputAnimation
                value={heroStyles.title.animation.class}
                id="header-title-animation"
                label="Select title animation"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    title: {
                      ...prevStyles.title,
                      animation: {
                        class: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className=" font-semibold">Sub Title</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              <TextArea
                value={heroStyles.subtitle?.text}
                label="Change hero subtile text"
                onChange={(e) => {
                  setHeroStyles((prevStyle) => ({
                    ...prevStyle,
                    subtitle: {
                      ...prevStyle.subtitle,
                      text: e.target.value,
                    },
                  }));
                }}
                id="hero-subtitle-text"
              />

              <InputFontSize
                value={heroStyles.subtitle.classes.fontSize}
                label="Change hero subtitle font size"
                id="hero-subtitle-font-size"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    subtitle: {
                      ...prevStyles.subtitle,
                      classes: {
                        ...prevStyles.subtitle.classes,
                        fontSize: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontFamily
                value={heroStyles.subtitle.classes.fontFamily}
                label="Change hero subtitle font family"
                id="hero-subtitle-font-family"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    subtitle: {
                      ...prevStyles.subtitle,
                      classes: {
                        ...prevStyles.subtitle.classes,
                        fontFamily: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontWeight
                value={heroStyles.subtitle.classes.fontWeight}
                label="Change hero subtitle font weight"
                id="hero-subtitle-font-weight"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    subtitle: {
                      ...prevStyles.subtitle,
                      classes: {
                        ...prevStyles.subtitle.classes,
                        fontWeight: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <Input
                value={heroStyles.subtitle.classes.fontColor}
                type="color"
                label="Change hero subtitle color"
                id="hero-subtitle-color"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    subtitle: {
                      ...prevStyles.subtitle,
                      classes: {
                        ...prevStyles.subtitle.classes,
                        fontColor: e.target.value,
                      },
                    },
                  }));
                }}
              />

              <InputAnimation
                value={heroStyles.subtitle.animation.class}
                id="header-subtitle-animation"
                label="Select subtitle animation"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    subtitle: {
                      ...prevStyles.subtitle,
                      animation: {
                        class: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className=" font-semibold">Button</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              <Input
                value={heroStyles.button.title}
                type="text"
                label="Change hero button Text"
                id="hero-button-text"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      title: e.target.value,
                    },
                  }));
                }}
              />
              <InputFontFamily
                value={heroStyles.button.classes.fontFamily}
                label="Change hero button font family"
                id="hero-button-font-family"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      classes: {
                        ...prevStyles.button.classes,
                        fontFamily: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontSize
                value={heroStyles.button.classes.fontSize}
                label="Change hero button font size"
                id="hero-button-font-size"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      classes: {
                        ...prevStyles.button.classes,
                        fontSize: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputFontWeight
                value={heroStyles.button.classes.fontWeight}
                label="Change hero button font weight"
                id="hero-button-font-weight"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      classes: {
                        ...prevStyles.button.classes,
                        fontWeight: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <Input
                value={heroStyles.button.classes.fontColor}
                type="color"
                label="Change hero button font color"
                id="hero-button-font-color"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      classes: {
                        ...prevStyles.button.classes,
                        fontColor: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <Input
                value={heroStyles.button.href}
                type="text"
                label="Change hero button link"
                id="hero-button-link"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      href: e.target.value,
                    },
                  }));
                }}
              />
              <Input
                value={heroStyles.button.classes.bgColor}
                type="color"
                label="Change hero button bg color"
                id="hero-button"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      classes: {
                        ...prevStyles.button.classes,
                        bgColor: e.target.value,
                      },
                    },
                  }));
                }}
              />
              <InputAnimation
                value={heroStyles.button.animation.class}
                id="header-button-animation"
                label="Select button animation"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    button: {
                      ...prevStyles.button,
                      animation: {
                        class: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className=" font-semibold">Image</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              <InputAnimation
                value={heroStyles.image.animation.class}
                id="header-image-animation"
                label="Select image animation"
                onChange={(e) => {
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    image: {
                      ...prevStyles.image,
                      animation: {
                        class: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Hero Gradient</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="gradient-toggle"
                  checked={heroStyles.bgGradient.show}
                  onChange={(e) => {
                    setHeroStyles((prevStyles) => ({
                      ...prevStyles,
                      bgGradient: {
                        ...prevStyles.bgGradient,
                        show: e.target.checked,
                      },
                    }));
                  }}
                />
                <label htmlFor="gradient-toggle" className="text-sm">
                  Show Hero Gradient
                </label>
              </div>

              <Input
                value={heroStyles.bgGradient.style.background}
                type="text"
                id="hero-bg-gradient-color"
                label="Copy and paste any gradient value text"
                onChange={(e) =>
                  setHeroStyles((prevStyles) => ({
                    ...prevStyles,
                    bgGradient: {
                      ...prevStyles.bgGradient,
                      style: {
                        background: e.target.value,
                      },
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleUpdateHeroStyles}
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

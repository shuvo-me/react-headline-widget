import siteLogo from "@/assets/site-logo.svg";
import heroImage from "@/assets/hero-image.png";
import BarIcon from "./BarIcon";
import { useAppStore } from "../store/AppStoreProvider";
import cn from "../utils/clsx";

const Preview = () => {
  const { content, setContent } = useAppStore();
  const { nav, hero } = content;

  return (
    <div className="bg-white flex flex-col relative overflow-hidden">
      {hero.bgGradient.show ? (
        <div
          className="h-[100rem] w-[54rem] md:w-[45rem]  lg:w-[64rem]  absolute inset-0 -rotate-45 translate-x-[-5rem] translate-y-[-11rem]"
          style={{
            ...content.hero.bgGradient.style,
          }}
        />
      ) : (
        ""
      )}

      <nav className="flex items-center justify-between px-1.5 py-2.5 z-10">
        <div>
          <img src={siteLogo} alt="site logo" />
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex items-center py-2 px-2.5 text-sm [&>li]:mx-4">
            {nav?.links.map((link) => (
              <li
                key={link.href}
                className={cn(
                  nav.linkStyle.classes.fontFamily,
                  nav.linkStyle.classes.fontSize,
                  nav.linkStyle.classes.fontWeight
                )}
                style={{
                  color: nav.linkStyle.classes.fontColor,
                }}
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex items-center gap-3">
          <button className="cursor-pointer md:hidden" type="button">
            <BarIcon />
          </button>
          <button
            type="button"
            className={cn(
              "cursor-pointer  font-semibold  bg-purple-500 rounded-full py-2.5 px-4 min-w-[100px] flex items-center justify-center",
              nav.action.button.classes.fontSize,
              nav.action.button.classes.fontColor
            )}
          >
            {nav.action.button.label}
          </button>
        </div>
      </nav>
      <div className=" flex flex-col md:flex-row min-h-[675px] mt-16 md:mt-0 z-10">
        <div className="flex-1 md:flex-1/2 flex flex-col justify-center items-center md:items-baseline  [&~*]:text-left pl-10 md:pl-40">
          <h1
            contentEditable
            onBlur={(e) =>
              setContent((prevContent) => ({
                ...prevContent,
                hero: {
                  ...prevContent.hero,
                  title: {
                    ...prevContent.hero.title,
                    text: e.target.innerText,
                  },
                },
              }))
            }
            className={cn(
              "max-w-sm line-clamp-2",
              hero.title.classes.fontFamily,
              hero.title.classes.fontSize,
              hero.title.classes.fontWeight,
              hero.title.animation.class
            )}
            style={{
              color: hero.title.classes.fontColor,
            }}
          >
            {hero?.title?.text}
          </h1>
          <p
            className={cn(
              "max-w-[511px]  mt-10 text-center md:text-left",
              hero.subtitle.classes.fontFamily,
              hero.subtitle.classes.fontSize,
              hero.subtitle.classes.fontWeight,
              hero.subtitle.animation.class
            )}
            style={{
              color: hero.subtitle.classes.fontColor,
            }}
          >
            {hero?.subtitle?.text}
          </p>
          <div className="mt-16">
            <a
              href={hero?.button?.href}
              className={cn(
                "min-w-[200px] rounded-full flex items-center justify-center text-white text-sm bg-amber-400 py-4 px-6",
                hero.button.classes.fontFamily,
                hero.button.classes.fontSize,
                hero.button.classes.fontWeight,
                hero.button.animation.class
              )}
              style={{
                color: hero.button.classes.fontColor,
                background: hero.button.classes.bgColor,
              }}
            >
              {hero?.button?.title}
            </a>
          </div>
        </div>
        <div className="flex-1 md:flex-1/2 flex flex-col items-center justify-center">
          <img src={heroImage} />
        </div>
      </div>
    </div>
  );
};

export default Preview;

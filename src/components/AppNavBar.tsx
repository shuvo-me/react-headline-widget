import { NavLink } from "react-router";
import GearIcon from "./GearIcon";
import DesktopIcon from "./DesktopIcon";
import DownloadIcon from "./DownloadIcon";
import { useAppStore } from "../store/AppStoreProvider";

const AppNavBar = () => {
  const { downloadStyleSettings } = useAppStore();
  return (
    <nav className="flex items-center justify-between flex-wrap">
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
            className={"flex items-center gap-2"}
          >
            <DesktopIcon />
            Preview
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/update-style"}
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
            className={"flex items-center gap-2"}
          >
            <GearIcon />
            Update Style
          </NavLink>
        </li>
      </ul>
      <button
        onClick={downloadStyleSettings}
        type="button"
        className="cursor-pointer py-2 px-4 flex items-center justify-center gap-2 text-sm bg-blue-500 text-white rounded"
      >
        Download Style
        <DownloadIcon />
      </button>
    </nav>
  );
};

export default AppNavBar;

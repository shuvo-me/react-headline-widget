import React from "react";
import { NavLink } from "react-router";
import GearIcon from "./GearIcon";
import DesktopIcon from "./DesktopIcon";

const AppNavBar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default AppNavBar;

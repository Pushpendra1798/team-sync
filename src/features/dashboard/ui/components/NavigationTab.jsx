
import React from "react";
import { NavLink } from "react-router";

const NavigationTab = ({ path, title, icon }) => {
    return (
        <NavLink
            to={path}
            end={path === "/home"}
            className={({ isActive }) =>
                `relative flex h-10.5 items-center gap-4 px-6 text-[15px] transition-colors ${
                    isActive
                        ? "border-r-2 border-(--tertiary) bg-(--primary)/40 font-semibold text-(--text-primary)"
                        : "text-(--text-secondary) hover:bg-(--bg-hover)"
                }`
            }
        >
            {React.createElement(icon, { size: 21, strokeWidth: 2 })}
            <span>{title}</span>
        </NavLink>
    );
};

export default NavigationTab;

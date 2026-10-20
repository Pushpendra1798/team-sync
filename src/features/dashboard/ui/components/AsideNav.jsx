import React from "react";
import { useSelector } from "react-redux";
import { Plus } from "lucide-react";
import NavigationTab from "./NavigationTab";
import {
    adminNavigation,
    employeeNavigation,
} from "../../../../app/constants/navigations";

const AsideNav = () => {
    const employee = useSelector((store) => store.auth.employee);

    const role = employee?.role?.toLowerCase();

    const navigationItems =
        role === "admin"
            ? adminNavigation
            : role === "employee"
                ? employeeNavigation
                : [];

    return (
        <aside className="fixed inset-y-0 left-0 z-40 flex w-61 flex-col border-r border-(--border-color) bg-(--bg-surface) text-[var(--text-primary)">
            {/* Brand */}
            <div className="flex h-16.25 shrink-0 flex-col justify-center border-b border-(--border-color) px-6">
                <h2 className="text-2xl font-bold tracking-tight">
                    team-sync
                </h2>

                <p className="text-xs text-(--text-secondary)">
                    Enterprise Workspace
                </p>
            </div>

            {/* Role-based navigation */}
            <nav className="mt-7 flex flex-col gap-1">
                {navigationItems.map((item) => (
                    <NavigationTab
                        key={item.path}
                        path={item.path}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </nav>

            {/* Static action button */}
            <div className="mt-auto px-6 pb-6">
                <button
                    type="button"
                    className="flex h-10.5 w-full items-center justify-center gap-3 rounded-lg bg-(--primary) px-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                    <Plus size={21} />
                    New Task
                </button>
            </div>
        </aside>
    );
};

export default AsideNav;
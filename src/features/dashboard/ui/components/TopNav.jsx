import React from "react";
import {
    Search,
    Bell,
    Grid3X3,
    Sparkles,
    Lightbulb,
    Moon,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const TopNav = () => {

    let { mode } = useSelector((store) => store.theme);
    const dispatch = useDispatch();

    const handleThemeChange = () => {
        dispatch(toggleTheme());
    };

    return (
        <header className="sticky top-0 z-30 flex h-16.25 items-center gap-4 border-b border-(--border-color) bg-(--bg-main) px-5 text-(--text-primary) sm:px-8">

            {/* Search */}
            <div className="relative w-full max-w-114.5">
                <Search
                    size={20}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />

                <input
                    type="search"
                    aria-label="Search workspace"
                    placeholder="Search workspace..."
                    className="h-8 w-full rounded-lg border border-(--border-color) bg-(--bg-surface) py-1 pl-9 pr-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--tertiary) focus:outline-none"
                />
            </div>

            {/* Right-side controls */}
            <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
                <div>
                    {mode === "light" ? (
                    <Moon onClick={handleThemeChange} size={23} />
                    ) : (
                    <Lightbulb onClick={handleThemeChange} size={23} />
                    )}
                </div>
                <button
                    type="button"
                    aria-label="Notifications"
                    className="relative rounded-md p-1.5 text-(--text-secondary) hover:bg-(--bg-hover)"
                >
                    <Bell size={21} />
                </button>

                {/* Workspace logo */}
                <div className="hidden items-center gap-1 text-xl tracking-wider text-(--text-primary) md:flex">
                    <Sparkles
                        size={23}
                        className="text-(--tertiary)"
                    />
                    <span>_ORK</span>
                </div>

                <button
                    type="button"
                    aria-label="Workspace applications"
                    className="hidden border-l border-(--border-color) py-2 pl-4 text-(--text-secondary) hover:text-(--text-primary) sm:block"
                >
                    <Grid3X3 size={20} />
                </button>

                {/* Static avatar placeholder */}
                <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-(--border-color) bg-(--primary) text-sm font-semibold text-white">
                    U
                </div>
            </div>
        </header>
    );
};

export default TopNav;

import React from "react";
import { Search, X, ChevronDown } from "lucide-react";

const EmployeeFilters = ({
    search,
    onSearchChange,
    department,
    onDepartmentChange,
    role,
    onRoleChange,
    status,
    onStatusChange,
    departments = [],
}) => {
    const selectClass =
        "h-11 w-full appearance-none rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] px-3 pr-9 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

    const wrapperClass = "relative min-w-0";

    return (
        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {/* Search */}
            <div className={wrapperClass}>
                <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />

                <input
                    type="search"
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search employees..."
                    aria-label="Search employees by name or email"
                    className="h-11 w-full rounded-xl border border-(--border-color) bg-(--bg-input) py-2 pl-11 pr-10 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-muted) focus:border-(--accent) focus:ring-2 focus:ring-(--accent)/20"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() => onSearchChange("")}
                        aria-label="Clear search"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-(--text-muted) transition hover:text-(--text-primary)"
                    >
                        <X size={15} />
                    </button>
                )}
            </div>

            {/* Department filter */}
            <div className={wrapperClass}>
                <select
                    value={department}
                    onChange={(event) => onDepartmentChange(event.target.value)}
                    aria-label="Filter by department"
                    className={selectClass}
                >
                    <option value="all">All Departments</option>

                    {departments.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />
            </div>

            {/* Role filter */}
            <div className={wrapperClass}>
                <select
                    value={role}
                    onChange={(event) => onRoleChange(event.target.value)}
                    aria-label="Filter by role"
                    className={selectClass}
                >
                    <option value="all">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                </select>

                <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />
            </div>

            {/* Status filter */}
            <div className={wrapperClass}>
                <select
                    value={status}
                    onChange={(event) => onStatusChange(event.target.value)}
                    aria-label="Filter by employee status"
                    className={selectClass}
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />
            </div>
        </div>
    );
};

export default EmployeeFilters;

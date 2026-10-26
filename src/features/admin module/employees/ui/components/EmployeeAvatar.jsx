
import React from "react";

const EmployeeAvatar = ({ employee, size = "md" }) => {
    const initials = (employee?.name || "U")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    const sizes = {
        sm: "h-8 w-8 text-xs",
        md: "h-11 w-11 text-sm",
        lg: "h-16 w-16 text-lg",
    };

    return (
        <div
            className={`flex ${sizes[size] || sizes.md}
                shrink-0 items-center justify-center overflow-hidden
                rounded-full bg-linear-to-br from-violet-500 to-indigo-700
                font-semibold text-white ring-2 ring-(--border-color)`}
        >
            {employee?.avatar ? (
                <img
                    src={employee.avatar}
                    alt={employee.name || "Employee"}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                        event.currentTarget.style.display = "none";
                    }}
                />
            ) : (
                initials
            )}
        </div>
    );
};

export default EmployeeAvatar;

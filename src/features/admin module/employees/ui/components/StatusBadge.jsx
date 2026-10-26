
import React from "react";

const StatusBadge = ({ status }) => {
    const isActive = status?.toLowerCase() === "active";

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                isActive
                    ? "border-(--success)/20 bg-(--success)/10 text-(--success)"
                    : "border-(--text-muted)/20 bg-(--bg-hover) text-(--text-secondary)"
            }`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${
                    isActive
                        ? "bg-(--success)"
                        : "bg-(--text-muted)"
                }`}
            />

            {isActive ? "Active" : "Inactive"}
        </span>
    );
};

export default StatusBadge;

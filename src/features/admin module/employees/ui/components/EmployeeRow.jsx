
import React from "react";
import { Mail, CalendarDays, MoreHorizontal } from "lucide-react";
import EmployeeAvatar from "./EmployeeAvatar";
import StatusBadge from "./StatusBadge";

const EmployeeRow = ({ employee, onView }) => {
    const joinedDate = employee.createdAt
        ? new Date(employee.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
        : "—";

    return (
        <tr className="border-b border-(--border-color) transition-colors hover:bg-(--bg-hover)">
            {/* Employee details */}
            <td className="px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                    <EmployeeAvatar employee={employee} size="md" />

                    <div className="min-w-0">
                        <p className="font-medium text-(--text-primary)">
                            {employee.name || "Unnamed employee"}
                        </p>

                        <p className="mt-1 flex items-center gap-1.5 text-xs text-(--text-muted)">
                            <Mail size={12} />
                            {employee.email || "No email"}
                        </p>
                    </div>
                </div>
            </td>

            {/* Department */}
            <td className="px-5 py-4 text-sm text-(--text-secondary) sm:px-6">
                {employee.department || "Unassigned"}
            </td>

            {/* Role */}
            <td className="px-5 py-4 sm:px-6">
                <span className="rounded-lg border border-(--border-color) bg-(--accent-soft) px-2.5 py-1.5 text-xs capitalize text-(--accent)">
                    {employee.role || "employee"}
                </span>
            </td>

            {/* Status */}
            <td className="px-5 py-4 sm:px-6">
                <StatusBadge status={employee.status} />
            </td>

            {/* Joining date */}
            <td className="px-5 py-4 text-xs text-(--text-muted) sm:px-6">
                <span className="flex items-center gap-2 whitespace-nowrap">
                    <CalendarDays size={14} />
                    {joinedDate}
                </span>
            </td>

            {/* Actions */}
            <td className="px-5 py-4 text-right sm:px-6">
                <button
                    type="button"
                    onClick={() => onView?.(employee)}
                    aria-label={`View ${employee.name || "employee"}`}
                    className="rounded-lg p-2 text-(--text-muted) transition-colors hover:bg-(--bg-hover) hover:text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--accent)/40"
                >
                    <MoreHorizontal size={19} />
                </button>
            </td>
        </tr>
    );
};

export default EmployeeRow;

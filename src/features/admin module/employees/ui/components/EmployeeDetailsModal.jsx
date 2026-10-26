
import React from "react";
import { X, Mail, Building2, CalendarDays, UserRound } from "lucide-react";
import EmployeeAvatar from "./EmployeeAvatar";
import StatusBadge from "./StatusBadge";

const EmployeeDetailsModal = ({ employee, onClose }) => {
    if (!employee) return null;

    const joinedDate = employee.createdAt
        ? new Date(employee.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
        : "—";

    const detailClass =
        "flex items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4 text-sm";

    const labelClass =
        "flex shrink-0 items-center gap-2 text-[var(--text-secondary)]";

    const valueClass =
        "break-all text-right font-medium text-[var(--text-primary)]";

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="employee-details-title"
                className="my-auto w-full max-w-md rounded-2xl border border-(--border-color) bg-(--bg-card) p-6 shadow-2xl sm:p-7"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2
                            id="employee-details-title"
                            className="text-xl font-bold text-(--text-primary)"
                        >
                            Employee Details
                        </h2>

                        <p className="mt-1 text-sm text-(--text-secondary)">
                            View employee information
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close employee details"
                        className="rounded-lg p-2 text-(--text-secondary) transition hover:bg-(--bg-hover) hover:text-(--text-primary)"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Employee profile */}
                <div className="flex items-center gap-4 rounded-xl border border-(--border-color) bg-(--bg-surface) p-4">
                    <EmployeeAvatar employee={employee} size="lg" />

                    <div className="min-w-0">
                        <h3 className="wrap-break-word text-lg font-semibold text-(--text-primary)">
                            {employee.name || "Unnamed employee"}
                        </h3>

                        <p className="mt-1 flex items-start gap-2 break-all text-sm text-(--text-secondary)">
                            <Mail size={15} className="mt-0.5 shrink-0" />
                            {employee.email || "No email available"}
                        </p>
                    </div>
                </div>

                {/* Employee information */}
                <div className="mt-6 space-y-4">
                    <div className={detailClass}>
                        <span className={labelClass}>
                            <Building2 size={16} />
                            Department
                        </span>

                        <span className={valueClass}>
                            {employee.department || "Unassigned"}
                        </span>
                    </div>

                    <div className={detailClass}>
                        <span className={labelClass}>
                            <UserRound size={16} />
                            Role
                        </span>

                        <span className={`${valueClass} capitalize`}>
                            {employee.role || "employee"}
                        </span>
                    </div>

                    <div className={detailClass}>
                        <span className={labelClass}>Status</span>

                        <StatusBadge status={employee.status} />
                    </div>

                    <div className={detailClass}>
                        <span className={labelClass}>
                            <CalendarDays size={16} />
                            Joined
                        </span>

                        <span className={valueClass}>
                            {joinedDate}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                        <span className={labelClass}>Employee ID</span>

                        <span className={`${valueClass} max-w-[60%] font-mono text-xs`}>
                            {employee._id || employee.id || "—"}
                        </span>
                    </div>
                </div>

                {/* Footer */}
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 w-full rounded-xl bg-(--accent) py-3 text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-(--accent) focus:ring-offset-2 focus:ring-offset-(--bg-card)"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default EmployeeDetailsModal;


import React from "react";
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({
    employees = [],
    loading = false,
    error = "",
    onView,
}) => {
    const headings = [
        "EMPLOYEE",
        "DEPARTMENT",
        "ROLE",
        "STATUS",
        "JOINED DATE",
        "ACTIONS",
    ];

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-card)">
            {/* Table Header */}
            <div className="flex items-center justify-between gap-3 border-b border-(--border-color) px-5 py-5 sm:px-6">
                <div>
                    <h2 className="text-lg font-semibold text-(--text-primary)">
                        All Employees
                    </h2>

                    <p className="mt-1 text-xs text-(--text-secondary)">
                        Employee directory and account information
                    </p>
                </div>

                <span className="rounded-lg border border-(--border-color) bg-(--bg-surface) px-3 py-2 text-xs text-(--text-secondary)">
                    {employees.length} results
                </span>
            </div>

            {/* Error Message */}
            {error && (
                <p
                    role="alert"
                    className="m-5 rounded-lg border border-(--danger)/20 bg-(--danger)/10 p-4 text-sm text-(--danger)"
                >
                    {error}
                </p>
            )}

            {/* Loading State */}
            {loading ? (
                <div className="space-y-4 p-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="flex animate-pulse gap-4"
                        >
                            <div className="h-11 w-11 rounded-full bg-(--bg-hover)" />

                            <div className="flex-1 space-y-2 pt-2">
                                <div className="h-3 w-36 rounded bg-(--bg-hover)" />
                                <div className="h-3 w-48 rounded bg-(--border-color)" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : employees.length === 0 ? (
                /* Empty State */
                <div className="px-5 py-16 text-center">
                    <h3 className="font-semibold text-(--text-primary)">
                        No employees found
                    </h3>

                    <p className="mt-2 text-sm text-(--text-secondary)">
                        Try another search or filter.
                    </p>
                </div>
            ) : (
                /* Employee Table */
                <div className="overflow-x-auto">
                    <table className="w-full min-w-212.5 text-left">
                        <thead className="bg-(--bg-surface)">
                            <tr>
                                {headings.map((heading) => (
                                    <th
                                        key={heading}
                                        className="whitespace-nowrap px-5 py-4 text-[10px] font-semibold tracking-wider text-(--text-muted) sm:px-6"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {employees.map((employee, index) => (
                                <EmployeeRow
                                    key={
                                        employee._id ||
                                        employee.id ||
                                        employee.email ||
                                        index
                                    }
                                    employee={employee}
                                    index={index}
                                    onView={onView}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Table Footer */}
            <div className="border-t border-(--border-color) px-5 py-4 text-xs text-(--text-muted) sm:px-6">
                Showing {employees.length} employee
                {employees.length === 1 ? "" : "s"}
            </div>
        </section>
    );
};

export default EmployeeTable;

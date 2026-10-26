import React, { useMemo, useState } from "react";
import { useEmployees } from "../../hooks/useEmployees";

import EmployeeHeader from "../components/EmployeeHeader";
import EmployeeStats from "../components/EmployeeStats";
import EmployeeFilters from "../components/EmployeeFilters";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeModal from "../components/AddEmployeeModal";
import EmployeeDetailsModal from "../components/EmployeeDetailsModal";

const Employee = () => {
    // 1. Fetch employees from your existing API hook
    const { data, isPending, isError, error } = useEmployees();

    // 2. Extract the employees array safely
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const employees = data?.employees ?? [];

    // 3. Manage page UI state
    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("all");
    const [role, setRole] = useState("all");
    const [status, setStatus] = useState("all");

    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // 4. Get departments dynamically from API data
    const departments = useMemo(
        () =>
            [
                ...new Set(
                    employees.map((employee) => employee.department).filter(Boolean),
                ),
            ].sort(),
        [employees],
    );

    // 5. Search and filter employees
    const filteredEmployees = useMemo(() => {
        const query = search.trim().toLowerCase();

        return employees.filter((employee) => {
            const matchesSearch =
                !query ||
                (employee.name || "").toLowerCase().includes(query) ||
                (employee.email || "").toLowerCase().includes(query);

            const matchesDepartment =
                department === "all" || employee.department === department;

            const matchesRole =
                role === "all" || (employee.role || "employee").toLowerCase() === role;

            const matchesStatus =
                status === "all" || (employee.status || "").toLowerCase() === status;

            return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
        });
    }, [employees, search, department, role, status]);

    // 6. Handle CSV export
    const handleExport = () => {
        if (!filteredEmployees.length) return;

        const headers = [
            "Name",
            "Email",
            "Department",
            "Role",
            "Status",
            "Created At",
        ];

        const escapeCsv = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;

        const rows = filteredEmployees.map((employee) => [
            employee.name,
            employee.email,
            employee.department,
            employee.role,
            employee.status,
            employee.createdAt,
        ]);

        const csv = [headers, ...rows]
            .map((row) => row.map(escapeCsv).join(","))
            .join("\n");

        const url = URL.createObjectURL(
            new Blob(["\uFEFF", csv], {
                type: "text/csv;charset=utf-8;",
            }),
        );

        const link = document.createElement("a");
        link.href = url;
        link.download = "employees.csv";
        link.click();

        URL.revokeObjectURL(url);
    };

    // 7. Loading state


if (isPending) {
    return (
        <div className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-(--border-color) bg-(--bg-main)">
            <div className="flex flex-col items-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-(--border-color) border-t-(--accent)" />

                <p className="text-sm font-medium text-(--text-secondary)">
                    Loading employees...
                </p>
            </div>
        </div>
    );
}


    // 8. API error state
    if (isError) {
        return (
            <div className="min-h-[60vh] bg-[#141216] p-8 text-white">
                <h2 className="text-xl font-semibold">Unable to load employees</h2>
                <p className="mt-2 text-sm text-red-400">
                    {error?.message || "Something went wrong while fetching employees."}
                </p>
            </div>
        );
    }

    // 9. Render reusable components
    return (
        <main className="min-h-screen bg-(--bg-main) p-4 text-(--text-primary) sm:p-6 lg:p-8">
            <div className="mx-auto max-w-[1600px]">
                <EmployeeHeader
                    onAdd={() => setShowAddModal(true)}
                    onExport={handleExport}
                />

                <EmployeeStats employees={employees} />

                <EmployeeFilters
                    search={search}
                    onSearchChange={setSearch}
                    department={department}
                    onDepartmentChange={setDepartment}
                    role={role}
                    onRoleChange={setRole}
                    status={status}
                    onStatusChange={setStatus}
                    departments={departments}
                />

                <EmployeeTable
                    employees={filteredEmployees}
                    loading={false}
                    error=""
                    onView={setSelectedEmployee}
                />

                {showAddModal && (
                    <AddEmployeeModal
                        onClose={() => setShowAddModal(false)}
                        onAdd={(employee) => {
                            // Connect your create-employee mutation here.
                            console.log("Employee submitted:", employee);
                        }}
                    />
                )}

                {selectedEmployee && (
                    <EmployeeDetailsModal
                        employee={selectedEmployee}
                        onClose={() => setSelectedEmployee(null)}
                    />
                )}
            </div>
        </main>
    );
};

export default Employee;


import React from "react";
import {
    Users,
    UserCheck,
    Building2,
    UserPlus,
} from "lucide-react";
import StatCard from "./StatCard";

const EmployeeStats = ({ employees = [] }) => {
    const activeCount = employees.filter(
        (employee) => employee.status?.toLowerCase() === "active"
    ).length;

    const departments = new Set(
        employees
            .map((employee) => employee.department)
            .filter(Boolean)
    ).size;

    const newJoiners = employees.filter((employee) => {
        if (!employee.createdAt) return false;

        const date = new Date(employee.createdAt);
        const days = (Date.now() - date.getTime()) / 86400000;

        return days >= 0 && days <= 30;
    }).length;

    const stats = [
        {
            title: "Total Employees",
            value: employees.length,
            description: "People in your workspace",
            icon: Users,
        },
        {
            title: "Active Employees",
            value: activeCount,
            description: "Currently active",
            icon: UserCheck,
        },
        {
            title: "Departments",
            value: departments,
            description: "Across your organization",
            icon: Building2,
        },
        {
            title: "New Joiners",
            value: newJoiners,
            description: "Joined in the last 30 days",
            icon: UserPlus,
        },
    ];

    return (
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
            ))}
        </section>
    );
};

export default EmployeeStats;


import React from "react";
import { Plus, Download, ContactRound } from "lucide-react";

const EmployeeHeader = ({ onAdd, onExport }) => {
    return (
        <header className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
            {/* Page title */}
            <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-(--accent)">
                    <ContactRound size={15} />
                    People &amp; Organization
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
                    Employee Management
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-(--text-secondary)">
                    Manage your people, organize teams, and keep your workspace running
                    smoothly.
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={onExport}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--border-color) bg-(--bg-card) px-4 py-3 text-sm font-medium text-(--text-primary) transition hover:bg-(--bg-hover) focus:outline-none focus:ring-2 focus:ring-(--accent)/30"
                >
                    <Download size={17} />
                    Export
                </button>

                <button
                    type="button"
                    onClick={onAdd}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-(--text-primary) hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-(--accent)/40 active:scale-[0.98] transition-opacity hover:opacity-90"
                >
                    <Plus size={18} />
                    Add Employee
                </button>
            </div>
        </header>
    );
};

export default EmployeeHeader;

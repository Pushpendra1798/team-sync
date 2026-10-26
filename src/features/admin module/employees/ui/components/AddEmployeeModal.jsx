
import React, { useState } from "react";
import { X } from "lucide-react";

const AddEmployeeModal = ({ onClose, onAdd, loading = false }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        department: "",
        role: "employee",
    });

    const handleChange = (event) => {
        setForm((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd?.(form);
    };

    const inputClass =
        "mt-2 h-11 w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-input)] px-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20";

    const labelClass =
        "text-sm font-medium text-[var(--text-secondary)]";

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
            <div className="my-auto w-full max-w-lg rounded-2xl border border-(--border-color) bg-(--bg-card) p-6 shadow-2xl sm:p-7">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-(--text-primary)">
                            Add Employee
                        </h2>
                        <p className="mt-1 text-sm text-(--text-secondary)">
                            Add a new member to your workspace.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                        className="rounded-lg p-2 text-(--text-secondary) transition hover:bg-(--bg-hover) hover:text-(--text-primary)"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="employee-name" className={labelClass}>
                            Full name
                        </label>
                        <input
                            id="employee-name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            required
                            minLength={2}
                            placeholder="Enter employee name"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="employee-email" className={labelClass}>
                            Email address
                        </label>
                        <input
                            id="employee-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="name@company.com"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="employee-department" className={labelClass}>
                            Department
                        </label>
                        <input
                            id="employee-department"
                            name="department"
                            type="text"
                            value={form.department}
                            onChange={handleChange}
                            required
                            placeholder="Engineering"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="employee-role" className={labelClass}>
                            Role
                        </label>
                        <select
                            id="employee-role"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option value="employee">Employee</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="rounded-xl border border-(--border-color) px-4 py-2.5 text-sm font-medium text-(--text-primary) transition hover:bg-(--bg-hover) disabled:opacity-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-(--accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Adding..." : "Add Employee"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeeModal;

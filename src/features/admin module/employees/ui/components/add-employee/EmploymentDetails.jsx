
import React from "react";
import { BriefcaseBusiness, ChevronDown, CalendarDays } from "lucide-react";
import { inputClass, labelClass, errorClass, cardClass } from "./formStyles";

const EmploymentDetails = ({ formData, errors, onChange }) => {
    return (
        <section className={cardClass}>
            <div className="mb-4 flex items-center gap-2 border-b border-(--border-color) pb-3">
                <BriefcaseBusiness size={17} className="text-(--accent)" />
                <h2 className="text-sm font-semibold text-(--text-primary)">
                    Employment Details
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="department" className={labelClass}>
                        Department <span className="text-(--danger)">*</span>
                    </label>

                    <div className="relative">
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={onChange}
                            className={`${inputClass} appearance-none pr-9`}
                        >
                            <option value="">Select Department</option>
                            <option value="common">Common</option>
                            <option value="engineering">Engineering</option>
                            <option value="design">Design</option>
                            <option value="human-resources">Human Resources</option>
                            <option value="marketing">Marketing</option>
                        </select>
                        <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                        />
                    </div>

                    {errors.department && (
                        <p className={errorClass}>{errors.department}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="role" className={labelClass}>
                        Role <span className="text-(--danger)">*</span>
                    </label>

                    <div className="relative">
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={onChange}
                            className={`${inputClass} appearance-none pr-9`}
                        >
                            <option value="">Select Role</option>
                            <option value="employee">Employee</option>
                            <option value="admin">Admin</option>
                        </select>
                        <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                        />
                    </div>

                    {errors.role && (
                        <p className={errorClass}>{errors.role}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="joiningDate" className={labelClass}>
                        Joining Date <span className="text-(--danger)">*</span>
                    </label>

                    <div className="relative">
                        <input
                            id="joiningDate"
                            name="joiningDate"
                            type="date"
                            value={formData.joiningDate}
                            onChange={onChange}
                            className={`${inputClass} pr-10`}
                        />
                        <CalendarDays
                            size={15}
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--text-muted)"
                        />
                    </div>

                    {errors.joiningDate && (
                        <p className={errorClass}>{errors.joiningDate}</p>
                    )}
                </div>

                <fieldset>
                    <legend className={labelClass}>Employment Status</legend>

                    <div className="flex flex-wrap gap-5 pt-1">
                        {["active", "inactive"].map((status) => (
                            <label
                                key={status}
                                className="flex cursor-pointer items-center gap-2 text-xs text-(--text-secondary)"
                            >
                                <input
                                    type="radio"
                                    name="status"
                                    value={status}
                                    checked={formData.status === status}
                                    onChange={onChange}
                                    className="h-3.5 w-3.5 accent-(--accent)"
                                />
                                <span className="capitalize">{status}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            </div>
        </section>
    );
};

export default EmploymentDetails;

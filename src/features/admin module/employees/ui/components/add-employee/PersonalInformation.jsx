
import React from "react";
import { UserRound } from "lucide-react";
import EmployeePhotoUpload from "./EmployeePhotoUpload";
import { inputClass, labelClass, errorClass, cardClass } from "./formStyles";

const PersonalInformation = ({
    formData,
    errors,
    photoPreview,
    onChange,
    onPhotoChange,
}) => {
    return (
        <section className={`${cardClass} mb-5`}>
            <div className="mb-4 flex items-center gap-2 border-b border-(--border-color) pb-3">
                <UserRound size={17} className="text-(--accent)" />
                <h2 className="text-sm font-semibold text-(--text-primary)">
                    Personal Information
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-[125px_minmax(0,1fr)]">
                <EmployeePhotoUpload
                    preview={photoPreview}
                    onChange={onPhotoChange}
                    error={errors.photo}
                />

                <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className={labelClass}>
                            Full Name <span className="text-(--danger)">*</span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            placeholder="e.g. Sarah Jenkins"
                            className={inputClass}
                        />
                        {errors.name && (
                            <p className={errorClass}>{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClass}>
                            Email Address <span className="text-(--danger)">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={onChange}
                            placeholder="sarah.j@synthetix.ai"
                            className={inputClass}
                        />
                        {errors.email && (
                            <p className={errorClass}>{errors.email}</p>
                        )}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="bio" className={labelClass}>
                            Bio / About
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows={3}
                            value={formData.bio}
                            onChange={onChange}
                            placeholder="Tell us about the new team member..."
                            className={`${inputClass} resize-y`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalInformation;


import React, { useState } from "react";
import { useNavigate } from "react-router";

import PersonalInformation from "../components/add-employee/PersonalInformation";
import EmploymentDetails from "../components/add-employee/EmploymentDetails";
import FormActions from "../components/add-employee/FormActions";

const initialFormData = {
    name: "",
    email: "",
    bio: "",
    department: "",
    role: "",
    joiningDate: "",
    status: "active",
};

const AddEmployee = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialFormData);
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState("");
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
            setErrors((prev) => ({
                ...prev,
                photo: "Please select a JPG or PNG image.",
            }));
            event.target.value = "";
            return;
        }

        if (file.size > 800 * 1024) {
            setErrors((prev) => ({
                ...prev,
                photo: "Image size must not exceed 800 KB.",
            }));
            event.target.value = "";
            return;
        }

        if (photoPreview) {
            URL.revokeObjectURL(photoPreview);
        }

        setPhoto(file);
        setPhotoPreview(URL.createObjectURL(file));

        setErrors((prev) => ({
            ...prev,
            photo: "",
        }));
    };

    const validateForm = () => {
        const nextErrors = {};

        if (!formData.name.trim()) {
            nextErrors.name = "Full name is required.";
        }

        if (!formData.email.trim()) {
            nextErrors.email = "Email address is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (!formData.department) {
            nextErrors.department = "Please select a department.";
        }

        if (!formData.role) {
            nextErrors.role = "Please select a role.";
        }

        if (!formData.joiningDate) {
            nextErrors.joiningDate = "Joining date is required.";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) return;

        // API integration will go here.
        // The form currently validates data but does not save it.
        const employeePayload = {
            ...formData,
            photo,
        };

        console.log("Employee form data:", employeePayload);
    };

    return (
        <main className="min-h-screen bg-(--bg-main) p-4 text-(--text-primary) sm:p-6 lg:p-8">
            <div className="mx-auto max-w-300">
                <header className="mb-5">
                    <h1 className="text-2xl font-bold tracking-tight text-(--text-primary)">
                        Add Employee
                    </h1>

                    <p className="mt-1 text-xs text-(--text-secondary)">
                        Configure the new team member&apos;s workspace
                        profile and permissions.
                    </p>
                </header>

                <form onSubmit={handleSubmit} noValidate>
                    <PersonalInformation
                        formData={formData}
                        errors={errors}
                        photoPreview={photoPreview}
                        onChange={handleChange}
                        onPhotoChange={handlePhotoChange}
                    />

                    <EmploymentDetails
                        formData={formData}
                        errors={errors}
                        onChange={handleChange}
                    />

                    <FormActions
                        onCancel={() => navigate("/home/employee")}
                    />
                </form>
            </div>
        </main>
    );
};

export default AddEmployee;


import React from "react";
import { UserPlus } from "lucide-react";

const FormActions = ({ onCancel, loading = false }) => {
    return (
        <div className="mt-6 flex flex-wrap justify-end gap-3">
            <button
                type="button"
                onClick={onCancel}
                disabled={loading}
                className="rounded-lg border border-(--border-color) bg-(--bg-card) px-5 py-2.5 text-xs font-medium text-(--text-secondary) transition hover:bg-(--bg-hover) disabled:opacity-50"
            >
                Cancel
            </button>

            <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-lg bg-(--primary) px-5 py-2.5 text-xs font-semibold text-white shadow-(--shadow-md) transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
                <UserPlus size={14} />
                {loading ? "Creating..." : "Create Employee"}
            </button>
        </div>
    );
};

export default FormActions;

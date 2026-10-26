
import React from "react";

const StatCard = ({ title, value, description, icon: Icon }) => {
    return (
        <div
            className="
                rounded-2xl
                border border-(--border-color)
                bg-(--bg-card)
                p-5
                transition-all duration-200
                hover:border-(--accent)
                hover:shadow-(--shadow-md)
            "
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-(--text-secondary)">
                        {title}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-(--text-primary)">
                        {value}
                    </h3>
                </div>

                {Icon && (
                    <div className="rounded-xl bg-(--accent-soft) p-3 text-(--accent)">
                        <Icon size={21} />
                    </div>
                )}
            </div>

            <p className="mt-4 text-xs text-(--text-muted)">
                {description}
            </p>
        </div>
    );
};

export default StatCard;

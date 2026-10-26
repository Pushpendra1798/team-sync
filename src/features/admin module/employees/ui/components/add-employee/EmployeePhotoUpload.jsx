
import React, { useRef } from "react";
import { Camera, Pencil } from "lucide-react";

const EmployeePhotoUpload = ({
    preview,
    onChange,
    error,
}) => {
    const fileRef = useRef(null);

    return (
        <div className="flex flex-col items-center">
            <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={onChange}
                className="hidden"
            />

            <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="relative flex h-28 w-24 items-center justify-center overflow-hidden rounded-lg border border-dashed border-(--border-color) bg-(--accent-soft) text-(--text-secondary) hover:border-(--accent)"
            >
                {preview ? (
                    <img
                        src={preview}
                        alt="Employee preview"
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <Camera size={24} />
                        <span className="text-[10px]">
                            Upload Photo
                        </span>
                    </div>
                )}

                <span className="absolute bottom-1 right-1 rounded-md bg-(--accent) p-1.5 text-white">
                    <Pencil size={12} />
                </span>
            </button>

            <p className="mt-2 text-center text-[9px] text-(--text-muted)">
                JPG or PNG. Max size of 800K.
            </p>

            {error && (
                <p className="mt-1 text-xs text-(--danger)">
                    {error}
                </p>
            )}
        </div>
    );
};

export default EmployeePhotoUpload;

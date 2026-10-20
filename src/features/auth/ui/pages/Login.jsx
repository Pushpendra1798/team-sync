import React from "react";
import {
    Network,
    Cloud,
    SquareTerminal,
    Eye,
    EyeOff,
    LogIn,
    LockKeyhole,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {

    let { register, handleSubmit, onLoginSubmit, errors, isSubmitting, navigate, showPassword, setShowPassword } = useAuth();

    return (
        <main className="relative flex min-h-screen items-center justify-center
        overflow-hidden bg-[#141216] px-4 py-10 text-[#e9e4ed]">

            {/* Background ambient glow */}
            <div
                className="pointer-events-none absolute -left-40 top-1/3
            h-96 w-96 rounded-full bg-purple-900/10 blur-[120px]"
            />
            <div
                className="pointer-events-none absolute -right-20 top-10
            h-96 w-96 rounded-full bg-violet-800/10 blur-[140px]"
            />

            {/* Decorative AI artwork */}
            <div className="pointer-events-none absolute bottom-8 right-5
        hidden h-75 w-77.5 items-center justify-center
        overflow-hidden rounded-2xl bg-[#100e14]/80
        xl:flex">
                <div className="absolute h-48 w-48 rounded-full
            border border-purple-400/10 blur-[1px]" />
                <div className="absolute h-40 w-40 rotate-45 rounded-[40%]
            border border-violet-400/20 shadow-[0_0_60px_rgba(139,92,246,0.08)]
            transform-[rotateX(60deg)_rotateZ(35deg)]" />
                <div className="absolute h-32 w-48 -rotate-12 rounded-[50%]
            border border-purple-300/20 blur-[1px]" />
                <div className="absolute h-20 w-44 rotate-45 rounded-[50%]
            border border-violet-300/10 blur-[2px]" />
                <div className="h-24 w-24 rounded-full bg-purple-700/5 blur-2xl" />
            </div>

            {/* Login card */}
            <section className="relative z-10 w-full max-w-133.5
        rounded-2xl border border-[#302b33] bg-[#1d1b20]
        px-6 py-8 shadow-2xl shadow-black/20 sm:px-10 sm:py-10">

                {/* Brand */}
                <div className="mb-10 text-center">
                    <div className="mx-auto mb-5 flex h-14.5 w-14.5
            items-center justify-center rounded-xl bg-[#7051ad]
            text-[#e4d4ff] shadow-lg shadow-purple-950/20">
                        <Network size={32} strokeWidth={1.8} />
                    </div>

                    <h1 className="text-[28px] font-bold tracking-tight">
                        team-sync
                    </h1>

                    <p className="mt-2 text-base text-[#c7c0cd]">
                        Sign in to your workspace
                    </p>
                </div>

                {/* Social login */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        type="button"
                        onClick={() => console.log("Google login clicked")}
                        className="flex h-13 items-center justify-center gap-3
                rounded-[10px] border border-[#403a46] bg-[#2b282f]
                text-sm font-semibold transition
                hover:border-[#8c6bc4] hover:bg-[#342e3b]"
                    >
                        <Cloud size={25} strokeWidth={2.5} />
                        GOOGLE
                    </button>

                    <button
                        type="button"
                        onClick={() => console.log("GitHub login clicked")}
                        className="flex h-13 items-center justify-center gap-3
                rounded-[10px] border border-[#403a46] bg-[#2b282f]
                text-sm font-semibold transition
                hover:border-[#8c6bc4] hover:bg-[#342e3b]"
                    >
                        <SquareTerminal size={24} strokeWidth={2.5} />
                        GITHUB
                    </button>
                </div>

                {/* Divider */}
                <div className="my-10 flex items-center gap-5">
                    <div className="h-px flex-1 bg-[#302b33]" />
                    <span className="whitespace-nowrap text-sm text-[#c9c2cf]">
                        or continue with email
                    </span>
                    <div className="h-px flex-1 bg-[#302b33]" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>

                    {/* Email */}
                    <div className="mb-7">
                        <label
                            htmlFor="login-email"
                            className="mb-2 block text-sm font-semibold
                text-[#d0c9d6]"
                        >
                            EMAIL ADDRESS
                        </label>

                        <input
                            id="login-email"
                            type="email"
                            autoComplete="email"
                            placeholder="name@company.com"
                            aria-invalid={!!errors.email}
                            {...register("email", {
                                required: "Email address is required.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address.",
                                },
                            })}
                            className={`h-13 w-full rounded-[10px] border
                bg-[#100e14] px-5 text-base text-white
                outline-none transition placeholder:text-[#d7d0dd]
                focus:border-[#9270d0] focus:ring-2
                focus:ring-purple-500/15 ${errors.email
                                    ? "border-red-500"
                                    : "border-[#37313d]"
                                }`}
                        />

                        {errors.email && (
                            <p role="alert" className="mt-2 text-xs text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-7">
                        <div className="mb-2 flex items-center justify-between gap-3">
                            <label
                                htmlFor="login-password"
                                className="text-sm font-semibold text-[#d0c9d6]"
                            >
                                PASSWORD
                            </label>

                            <a
                                href="/forgot-password"
                                className="text-sm font-medium text-[#c8b0f7]
                    transition hover:text-white hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <div className="relative">
                            <input
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                aria-invalid={!!errors.password}
                                {...register("password", {
                                    required: "Password is required.",
                                    minLength: {
                                        value: 8,
                                        message: "Password must contain at least 8 characters.",
                                    },
                                })}
                                className={`h-13 w-full rounded-[10px] border
                    bg-[#100e14] px-5 pr-12 text-base
                    tracking-wide text-white outline-none
                    transition placeholder:text-[#57515f]
                    focus:border-[#9270d0] focus:ring-2
                    focus:ring-purple-500/15 ${errors.password
                                        ? "border-red-500"
                                        : "border-[#37313d]"
                                    }`}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword((value) => !value)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute right-4 top-1/2
                    -translate-y-1/2 text-[#958b9e]
                    transition hover:text-white"
                            >
                                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                            </button>
                        </div>

                        {errors.password && (
                            <p role="alert" className="mt-2 text-xs text-red-400">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember me */}
                    <label className="mb-8 flex w-fit cursor-pointer
            items-center gap-3 text-sm text-[#c9c2cf]">
                        <input
                            type="checkbox"
                            {...register("rememberMe")}
                            className="h-5 w-5 cursor-pointer rounded
                border-[#47404e] accent-[#7656b6]"
                        />
                        Stay signed in
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex h-15.75 w-full items-center
                justify-center gap-3 rounded-[10px]
                bg-[#6d50aa] text-base font-semibold
                text-[#eee4ff] shadow-lg shadow-purple-950/20
                transition duration-200 hover:bg-[#7b5cba]
                active:scale-[0.99]
                disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Signing In..." : "Sign In"}
                        <LogIn size={21} strokeWidth={2.5} />
                    </button>
                </form>

                {/* Footer link */}
                <div className="mt-10 border-t border-[#302b33] pt-8">
                    <p className="text-center text-sm text-[#c9c2cf]">
                        Don't have an account?{" "}
                        <span
                            onClick={() => navigate("/register")}
                            className="ml-1 font-semibold text-[#cbb0ff]
                transition hover:text-white hover:underline"
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;

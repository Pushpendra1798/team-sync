
import React from "react";
import {
    UserRound,
    Mail,
    LockKeyhole,
    Sparkles,
    Network,
    Eye,
    EyeOff,
    ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
    let { register, handleSubmit, onRegisterSubmit, errors, isSubmitting, navigate, showPassword, setShowPassword } = useAuth();

    return (
        <div className="min-h-screen bg-[#141216] text-[#e9e4ed]">
            <main className="flex min-h-screen flex-col lg:min-h-[calc(100vh-96px)] lg:flex-row">
                {/* LEFT: Brand panel */}
                <section className="relative flex min-h-97.5 w-full flex-col
            justify-between overflow-hidden border-b border-purple-950
            bg-[#0c1325] px-6 py-6 sm:px-10 lg:min-h-212.5
            lg:w-[40%] lg:border-b-0 lg:border-r lg:border-r-[#302344]
            lg:px-12 lg:py-6">

                    {/* Decorative network background */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br
                from-[#111426] via-[#10203a] to-[#17101e]" />

                        <svg
                            className="absolute inset-0 h-full w-full opacity-60"
                            viewBox="0 0 600 900"
                            preserveAspectRatio="xMidYMid slice"
                            aria-hidden="true"
                        >
                            <defs>
                                <linearGradient id="networkGradient">
                                    <stop offset="0%" stopColor="#647dbb" />
                                    <stop offset="55%" stopColor="#5079b2" />
                                    <stop offset="100%" stopColor="#a56cc9" />
                                </linearGradient>
                                <radialGradient id="networkGlow">
                                    <stop offset="0%" stopColor="#377bb5" stopOpacity=".3" />
                                    <stop offset="100%" stopColor="#0c1325" stopOpacity="0" />
                                </radialGradient>
                            </defs>

                            <ellipse
                                cx="300"
                                cy="440"
                                rx="340"
                                ry="330"
                                fill="url(#networkGlow)"
                            />

                            {Array.from({ length: 19 }, (_, i) => {
                                const x = (i * 97 + 21) % 600;
                                const y = (i * 151 + 35) % 900;

                                return (
                                    <g key={i}>
                                        {Array.from({ length: 4 }, (_, j) => {
                                            const x2 = (x + j * 83 + 47) % 600;
                                            const y2 = (y + j * 61 + 90) % 900;

                                            return (
                                                <line
                                                    key={j}
                                                    x1={x}
                                                    y1={y}
                                                    x2={x2}
                                                    y2={y2}
                                                    stroke="url(#networkGradient)"
                                                    strokeWidth=".9"
                                                    opacity=".65"
                                                />
                                            );
                                        })}
                                        <circle
                                            cx={x}
                                            cy={y}
                                            r={i % 3 === 0 ? 3 : 1.8}
                                            fill="#b58adf"
                                            opacity=".75"
                                        />
                                    </g>
                                );
                            })}

                            {Array.from({ length: 60 }, (_, i) => (
                                <circle
                                    key={`dot-${i}`}
                                    cx={(i * 73 + 11) % 600}
                                    cy={(i * 127 + 17) % 900}
                                    r="1.5"
                                    fill="#8eb9ed"
                                    opacity=".4"
                                />
                            ))}
                        </svg>

                        <div className="absolute inset-0 bg-linear-to-t
                from-[#141216] via-transparent to-[#0c1325]/40" />
                    </div>

                    {/* Logo */}
                    <a
                        href="/home"
                        className="relative z-10 w-fit text-xl font-bold tracking-tight"
                    >
                        team-sync
                    </a>

                    {/* Hero content */}
                    <div className="relative z-10 mx-auto w-full max-w-lg py-10 lg:mx-0 lg:py-0">
                        <div className="mb-5 flex items-center gap-2 text-[11px]
                font-semibold uppercase tracking-[0.22em] text-[#d5b9ff]">
                            <Sparkles size={20} />
                            Next-gen intelligence
                        </div>

                        <h1 className="max-w-md text-3xl font-bold leading-tight
                tracking-tight sm:text-4xl">
                            Accelerate your team's intelligence.
                        </h1>

                        <p className="mt-5 max-w-md text-base leading-6 text-[#d0cad8]">
                            Connect your enterprise data to our specialized AI models
                            and unlock unparalleled strategic insights in seconds.
                        </p>

                        <div className="mt-12 flex gap-10">
                            <div>
                                <p className="text-2xl font-bold">99.9%</p>
                                <p className="mt-1 text-xs text-[#aaa2b4]">Uptime SLA</p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold">ISO</p>
                                <p className="mt-1 text-xs text-[#aaa2b4]">
                                    27001 Certified
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RIGHT: Registration form */}
                <section className="flex w-full flex-1 items-center justify-center
            px-5 py-12 sm:px-10 lg:w-[60%] lg:px-12 lg:py-16">
                    <div className="w-full max-w-123">

                        <div className="mb-9">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-[34px]">
                                Create your account
                            </h2>
                            <p className="mt-2 text-sm text-[#c9c3cf] sm:text-base">
                                Experience the future of collaborative data intelligence.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onRegisterSubmit)} noValidate>
                            {/* Full name */}
                            <div className="mb-7">
                                <label
                                    htmlFor="fullName"
                                    className="mb-2 block text-xs font-semibold tracking-wide"
                                >
                                    Full Name
                                </label>
                                <div className="relative">
                                    <UserRound
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#625b6b]"
                                    />

                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full rounded-lg border border-[#39313f] bg-[#100e13] py-3 pl-12 pr-4 text-white placeholder:text-[#797180] outline-none focus:border-purple-400"
                                        {...register("fullName", {
                                            required: "Full name is required.",
                                        })}
                                    />
                                </div>

                                {errors.fullName && (
                                    <p className="mt-1.5 text-xs text-red-400" role="alert">
                                        {errors.fullName.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-7">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-xs font-semibold tracking-wide"
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#625b6b]"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full rounded-lg border border-[#39313f] bg-[#100e13] py-3 pl-12 pr-4 text-white placeholder:text-[#797180] outline-none focus:border-purple-400"
                                        {...register("email", {
                                            required: "Email address is required.",
                                        })}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-red-400" role="alert">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="mb-7">
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-xs font-semibold tracking-wide"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole
                                        size={18}
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#625b6b]"
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-[#39313f] bg-[#100e13] py-3 pl-12 pr-12 text-white placeholder:text-[#797180] outline-none focus:border-purple-400"
                                        {...register("password", {
                                            required: "Password is required.",
                                        })}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((previous) => !previous)}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#797180] hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>


                                {errors.password && (
                                    <p className="mt-1.5 text-xs text-red-400" role="alert">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Terms checkbox */}
                            <div className="mb-7">
                                <label className="flex cursor-pointer items-start gap-3">
                                    <input
                                        type="checkbox"
                                        {...register("terms", {
                                            required: "Please accept the Terms of Service.",
                                        })}
                                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer
                        accent-[#a78bfa]"
                                    />

                                    <span className="text-xs leading-5 text-[#d1cbd6]">
                                        I agree to the{" "}
                                        <a
                                            href="/terms"
                                            className="text-[#cbb3ff] hover:underline"
                                        >
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="/privacy"
                                            className="text-[#cbb3ff] hover:underline"
                                        >
                                            Privacy Policy
                                        </a>.
                                    </span>
                                </label>

                                {errors.terms && (
                                    <p className="mt-1.5 text-xs text-red-400" role="alert">
                                        {errors.terms.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-lg bg-linear-to-r
                    from-[#7659b4] to-[#c7aaf8] px-4 py-4.25
                    font-semibold text-[#180e30] shadow-lg
                    shadow-purple-950/20 transition duration-200
                    hover:brightness-110 active:scale-[0.99]
                    disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-10 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#29252e]" />
                            <span className="whitespace-nowrap text-[11px] font-medium
                text-[#716a79]">
                                OR CONTINUE WITH
                            </span>
                            <div className="h-px flex-1 bg-[#29252e]" />
                        </div>

                        {/* Social sign-in */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => console.log("Google sign-up clicked")}
                                className="flex items-center justify-center gap-2 rounded-lg
                    border border-[#48434f] px-4 py-4 text-sm
                    transition hover:border-[#a78bfa] hover:bg-white/3"
                            >
                                <span className="font-bold text-base text-[#f7a34b]">G</span>
                                Google
                            </button>

                            <button
                                type="button"
                                onClick={() => console.log("SSO sign-up clicked")}
                                className="flex items-center justify-center gap-2 rounded-lg
                    border border-[#48434f] px-4 py-4 text-sm
                    transition hover:border-[#a78bfa] hover:bg-white/3"
                            >
                                <Network size={19} />
                                SSO
                            </button>
                        </div>

                        {/* Login link */}
                        <p className="mt-14 text-center text-sm text-[#d0cad6]">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/")}
                                className="ml-1 font-semibold text-[#cbb0ff]
                        hover:underline"
                            >
                                Log In
                            </span>
                        </p>

                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-[#29252e] px-6 py-7 sm:px-10">
                <div className="mx-auto flex max-w-[1600px] flex-col
            items-center justify-between gap-5 lg:flex-row">
                    <a href="/" className="text-lg font-bold tracking-tight">
                        team-sync
                    </a>

                    <nav className="flex flex-wrap items-center justify-center
            gap-x-6 gap-y-3 text-xs text-[#bdb5c5]">
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms of Service</a>
                        <a href="/security" className="hover:text-white">Security</a>
                        <a href="/status" className="hover:text-white">System Status</a>
                    </nav>

                    <p className="text-center text-xs text-[#bdb5c5]">
                        © 2026 team-sync. Enterprise Intelligence Platforms.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Register;

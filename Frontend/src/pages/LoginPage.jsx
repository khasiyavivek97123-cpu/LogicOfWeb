import { useState } from "react";
import LoginForm from "../components/Auth/LoginForm";
import { loginUserService } from "../services/auth.services";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (formData) => {
        setLoading(true);
        setError("");

        try {
            const response = await loginUserService(formData);

            console.log(response);
            alert("Login Successful");

            // navigate("/");  // if using react-router
        } catch (err) {
            setError(err.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen overflow-hidden bg-stone-100">
            <div className="grid h-full lg:grid-cols-[46%_54%]">

                {/* ================= LEFT PANEL ================= */}
                <section className="relative flex items-center justify-center overflow-hidden bg-white px-8 lg:px-20">

                    {/* Background Accent */}
                    <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-900/5 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-stone-50 to-transparent" />

                    <div className="relative z-10 w-full max-w-md">

                        {error && (
                            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm">
                                {error}
                            </div>
                        )}

                        <LoginForm
                            onSubmit={handleLogin}
                            loading={loading}
                        />

                    </div>
                </section>

                {/* ================= RIGHT PANEL ================= */}
                <section className="relative hidden overflow-hidden bg-stone-50 lg:flex">

                    {/* Diagonal Divider
                <div
                    className="absolute left-0 top-0 h-full w-40 bg-white"
                    style={{
                        clipPath: "polygon(0 0,100% 0,45% 100%,0 100%)",
                    }}
                /> */}

                    {/* Large Background Circle */}
                    <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-red-900/5" />

                    {/* Medium Circle */}
                    <div className="absolute bottom-[-100px] left-24 h-72 w-72 rounded-full bg-red-900/5 blur-sm" />

                    {/* Decorative Grid */}
                    <div className="absolute inset-0 opacity-[0.04]">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#7f1d1d 1px, transparent 1px), linear-gradient(to right, #7f1d1d 1px, transparent 1px)",
                                backgroundSize: "38px 38px",
                            }}
                        />
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute right-24 top-24 h-28 w-28 rounded-3xl border border-white bg-white/80 shadow-xl backdrop-blur-md rotate-12" />

                    <div className="absolute bottom-28 left-28 h-20 w-20 rounded-2xl border border-white bg-white/70 shadow-lg backdrop-blur-md -rotate-12" />

                    {/* Main Content */}
                    <div className="relative z-10 flex w-full flex-col items-center justify-center px-20">

                        <img
                            src="./src/assets/LoginIcon3.png"
                            alt="Login Image"
                            className="max-h-[46vh] w-auto object-contain"
                            style={{
                                maskImage:
                                    "radial-gradient(circle at center, black 82%, transparent 100%)",
                                WebkitMaskImage:
                                    "radial-gradient(circle at center, black 82%, transparent 100%)",
                            }}
                        />

                        <h2 className="mt-12 text-4xl font-bold tracking-tight text-stone-900">
                            Build Better.
                        </h2>

                        <p className="mt-5 max-w-lg text-center text-lg leading-8 text-stone-600">
                            A modern workspace to manage projects, collaborate with
                            your team, and streamline development—all from one
                            beautifully crafted platform.
                        </p>

                    </div>

                </section>

            </div>
        </div>
    );
};

export default LoginPage;
import { useState } from "react";

const LoginForm = ({ onSubmit, loading }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({ email, password });
        // setEmail("")
        // setPassword("")
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-red-900">
                            Welcome Back
                        </h1>
                        <p className="mt-2 text-sm text-stone-500">
                            Sign in to continue to your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-stone-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition-all duration-200 focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-stone-700">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition-all duration-200 focus:border-red-900 focus:ring-2 focus:ring-red-900/10"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-red-900 px-4 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "Logging In..." : "Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
import React, { useContext } from "react";
import { data, Navigate, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
    let navigate = useNavigate()
    let { isLoggedIn, setIsLoggedIn, registerUser } = useContext(Auth)
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    })

    let handleSub = (data) => {
        let user = registerUser.find((elem) => {
            return elem.email === data.email && elem.password === data.password;
        })

        if (!user) {
            toast.error("Unathorized User")
            return <Navigate to={"/"} />
        }
        setIsLoggedIn(user)
        console.log("logged in")
        navigate("/home")
        toast.success("Logged in successuly")
        localStorage.setItem("logged user", JSON.stringify(user))
    }

    return (
        <div className="min-h-screen flex bg-black text-white">


            <div className="hidden md:flex w-1/2 flex-col justify-center px-16 bg-gradient-to-br from-lime-400/30 via-black to-black border-r border-gray-800">


                <div className="flex items-center gap-2 mb-22">
                    <div className="w-10 h-10 bg-lime-400 rounded-xl flex items-center justify-center text-black font-bold">
                        <i className="fa-solid fa-bolt"></i>
                    </div>
                    <h1 className="text-3xl font-semibold">
                        Sky<span className="text-lime-400">Mart</span>
                    </h1>
                </div>

                <p className="text-lime-400 text-sm mb-2">WELCOME BACK</p>

                <h1 className="text-5xl font-bold leading-tight mb-6">
                    Shop the future. <br />
                    <span className="text-lime-400">Today.</span>
                </h1>

                <p className="text-gray-400 mb-10 max-w-md">
                    Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
                </p>

                {/* Stats */}
                <div className="flex gap-6">
                    <div className="border border-gray-700 rounded-xl px-6 py-4 text-center">
                        <p className="text-lime-400 font-bold text-lg">20K+</p>
                        <p className="text-gray-400 text-sm">Products</p>
                    </div>

                    <div className="border border-gray-700 rounded-xl px-6 py-4 text-center">
                        <p className="text-lime-400 font-bold text-lg">50K+</p>
                        <p className="text-gray-400 text-sm">Users</p>
                    </div>

                    <div className="border border-gray-700 rounded-xl px-6 py-4 text-center">
                        <p className="text-lime-400 font-bold text-lg">4.9★</p>
                        <p className="text-gray-400 text-sm">Rating</p>
                    </div>
                </div>
            </div>


            <div className="flex w-full md:w-1/2 items-center justify-center px-6">

                <div className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl shadow-xl border border-gray-800">

                    <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
                    <p className="text-gray-400 mb-6 text-sm">
                        Enter your credentials to continue
                    </p>

                    <form
                        onSubmit={handleSubmit(handleSub)}
                        className="space-y-4">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition"
                        />
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:ring-1 focus:ring-lime-400 outline-none transition"
                        />
                        <button
                            type="submit"
                            className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition"
                        >
                            Sign in →
                        </button>
                    </form>

                    <p onClick={() => navigate("register")} className="text-gray-400 text-sm mt-6 text-center">
                        Don’t have an account?{" "}
                        <span className="text-lime-400 cursor-pointer hover:underline">
                            Create one
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
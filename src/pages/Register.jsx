import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useContext } from "react";

const Register = () => {
    let navigate = useNavigate()
    let { registerUser, setRegisterUser, } = useContext(Auth)
    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    })

    let handleSub = (data) => {
        // console.log(errors)

        let arr = [...registerUser, data]
        setRegisterUser(arr)
        toast.success("Registered successfuly")
        localStorage.setItem("regUser", JSON.stringify(arr))

        reset()
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl shadow-lg border border-gray-800">

                <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
                <p className="text-gray-400 mb-6 text-sm">
                    Enter your details to get started
                </p>

                <form
                    onSubmit={handleSubmit(handleSub)}
                    className="space-y-4">

                    {/* Full Name */}
                    <input
                        {...register("name",/* { required: toast.error("fill all fields") } */)}
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:outline-none transition"
                    />
                    {/* {errors.name && toast.error("fill all fields")} */}

                    {/* Email */}
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:outline-none transition"
                    />
                    {/* {errors.password && toast.error("fill all fields")} */}

                    {/* Password */}
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:outline-none transition"
                    />
                    {/* {errors.password && toast.error("fill all fields")} */}

                    {/* Confirm Password */}
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:border-lime-400 focus:outline-none transition"
                    />
                    {/* {errors.password && toast.error("fill all fields")} */}
                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition"
                    >
                        Register →
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-6 text-center">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/")} className="text-lime-400 cursor-pointer hover:underline">
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;

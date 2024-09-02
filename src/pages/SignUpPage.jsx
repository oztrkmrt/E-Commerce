import axiosInstance from "@/services/axiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const [isStore, setIsStore] = useState(false);
    const [roles, SetRoles] = useState([])
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({
        mode: "onBlur",
    });

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axiosInstance.get("/roles");
                SetRoles(response.data);
            } catch (error) {
                console.error("Error receiving role information:", error)
            }
        };

        fetchRoles();
    }, [])

    const onSubmit = (data) => {
        console.log(data);
    };

    const selectedRole = watch("role_id");
    useEffect(() => {
        setIsStore(selectedRole === "store");
    }, [selectedRole]);

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
            <h1 className="text-[#252B42] text-3xl">Create an account</h1>
            <div className="w-full max-w-md border border-gray p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <label className="text-[#252B42]">Name</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters long",
                                },
                            })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                        <label className="text-[#252B42]">Email</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        <label className="text-[#252B42]">Password</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                                    message:
                                        "Password must be at least 8 characters long and include numbers, lowercase, uppercase letters, and special characters",
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        <label className="text-[#252B42]">Confirm Password</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500">{errors.confirmPassword.message}</p>
                        )}

                        <label className="text-[#252B42]">Role</label>
                        <select
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            {...register("role_id")}
                            onChange={(e) => setIsStore(e.target.value === "store")}
                        >
                            <option value="customer">Customer</option>
                            <option value="store">Store</option>
                        </select>

                        {isStore && (
                            <>
                                <label className="text-[#252B42]">Store Name</label>
                                <input
                                    className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                                    type="text"
                                    {...register("storeName", {
                                        required: "Store Name is required",
                                        minLength: {
                                            value: 3,
                                            message: "Store Name must be at least 3 characters long",
                                        },
                                    })}
                                />
                                {errors.storeName && <p className="text-red-500">{errors.storeName.message}</p>}

                                <label className="text-[#252B42]">Store Phone</label>
                                <input
                                    className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                                    type="tel"
                                    {...register("storePhone", {
                                        required: "Store Phone is required",
                                        pattern: {
                                            value: /^\+?(\d{10,12})$/,
                                            message: "Please enter a valid Turkey phone number",
                                        },
                                    })}
                                />
                                {errors.storePhone && <p className="text-red-500">{errors.storePhone.message}</p>}

                                <label className="text-[#252B42]">Store Tax ID</label>
                                <input
                                    className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                                    type="text"
                                    {...register("storeTaxID", {
                                        required: "Store Tax ID is required",
                                        pattern: {
                                            value: /^T\d{4}V\d{6}$/,
                                            message: "Store Tax ID must match the format 'TXXXXVXXXXXX'",
                                        },
                                    })}
                                />
                                {errors.storeTaxID && <p className="text-red-500">{errors.storeTaxID.message}</p>}

                                <label className="text-[#252B42]">Store Bank Account</label>
                                <input
                                    className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                                    type="text"
                                    {...register("storeBankAccount", {
                                        required: "Store Bank Account is required",
                                        pattern: {
                                            value: /^TR\d{2} \d{4} \d{4} \d{4} \d{4} \d{4} \d{2}$/,
                                            message: "Please enter a valid Turkish IBAN format 'TRXX XXXX XXXX XXXX XXXX XXXX XX'",
                                        },
                                    })}
                                />
                                {errors.storeBankAccount && (
                                    <p className="text-red-500">{errors.storeBankAccount.message}</p>
                                )}
                            </>
                        )}

                        <button
                            type="submit"
                            className={`mt-4 bg-[#252B42] text-white p-2 rounded ${!isValid ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={!isValid}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;

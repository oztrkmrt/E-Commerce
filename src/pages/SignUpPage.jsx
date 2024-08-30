import { useForm } from "react-hook-form";

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);

    };

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
            <h1 className="text-[#252B42] text-3xl">Create an account</h1>
            <div className="h-2/3 w-1/3 border border-gray p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <label className="text-[#252B42]">Name</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="text"
                            {...register("name", { required: "Name is required" })}
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
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters long",
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
                        >
                            <option value="customer">Customer</option>
                            <option value="store">Store</option>
                        </select>

                        <button
                            type="submit"
                            className="mt-4 bg-[#252B42] text-white p-2 rounded"
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

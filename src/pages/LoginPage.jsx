import { loginUser } from '@/redux/thunk/authThunk';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onBlur',
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [from, setFrom] = useState('/');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const fromPath = searchParams.get('from');
        if (fromPath) {
            setFrom(fromPath);
        }
    }, [location]);

    const onSubmit = (data) => {
        const formData = { ...data, rememberMe };
        dispatch(loginUser(formData))
            .unwrap()
            .then(() => {
                history.push(from);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col gap-10 items-center pt-40 min-h-screen">
            <h1 className="text-[#252B42] text-3xl">Login</h1>
            <div className="w-full max-w-md border border-gray p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4">
                        <label className="text-[#252B42]">Email</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="email"
                            {...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        <label className="text-[#252B42]">Password</label>
                        <input
                            className="border border-[#E6E6E6] bg-[#F9F9F9] text-[#737373] p-2"
                            type="password"
                            {...register('password', {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        <div className="flex items-center gap-2">
                            <input
                                onClick={() => setRememberMe(!rememberMe)}
                                id="checkbox"
                                type="checkbox"
                                {...register('rememberMe')}
                            />
                            <label className="text-[#252B42]">Remember Me</label>
                        </div>

                        <button
                            type="submit"
                            className={`mt-4 bg-[#252B42] text-white p-2 rounded ${!isValid ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={!isValid}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)

    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='border border-2 p-10 rounded-sm'>
                <p className='text-center font-bold text-2xl'>Login</p>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <p>Create a new account <Link className='text-green-500' to='/signup'>Create</Link></p>
                    <button className='btn btn-success w-full mt-8 text-white font-bold'>Login</button>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;
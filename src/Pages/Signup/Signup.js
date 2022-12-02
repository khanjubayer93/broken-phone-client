import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AuthContext from '../../context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext)
    const handleSignup = data => {
        console.log(data)
        createUser(data.email, data.password)


    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='border border-2 p-10 rounded-sm'>
                <p className='text-center font-bold text-2xl'>Sign Up</p>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    </div>
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
                    <p>Do you have account? <Link className='text-green-500 font-bold' to='/signup'>Login</Link></p>
                    <button className='btn btn-success w-full mt-8 text-white font-bold'>Login</button>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;
import { useForm } from "react-hook-form";
import SocialIcon from "../../Shared/SocialIcon/SocialIcon";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const {login}=useContext(AuthContext);
    const [error,setError]=useState('')
    const navigate =useNavigate()
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password)
        .then((result)=>{
            const loggeduser = result.user;
            console.log(loggeduser);
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Log in successful',
                showConfirmButton: false,
                timer: 1500
              })
            
        })

        .catch((error)=>{
            setError(error.message)
        })

    };


    return (
        <>

            <div className="flex justify-center items-center rounded bg-gray-200">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl text-center font-extrabold my-10">LOGIN NOW <span className="text-yellow-600">!!!</span></h2>
                    {error && <div className="text-red-500 font-bold text-center">{error}</div>}
                    <div className="mx-auto" >
                    

                        <label>Email</label>
                        <input {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter email here"
                            className="input input-bordered w-full input-warning mb-3" />


                        <div>
                            <label>Password</label>
                            <input
                                className="input input-bordered w-full input-warning mb-3"
                                type="password"
                                {...register('password', { required: true, minLength: 8 })}
                            />
                            {errors.password && <span className='text-red-600' >Please enter a password with at least 8 characters</span>}
                        </div>

                        <div>
                            <label>Confirm Password</label>
                            <input
                                className="input input-bordered w-full input-warning mb-3"
                                type="password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === password,
                                })}
                            />
                            {errors.confirmPassword && <span className='text-red-600'>Passwords do not match</span>}
                        </div>


                        {errors.exampleRequired && <span>This field is required</span>}
                        <button type="submit" className="w-full btn btn-info mb-12">SUBMIT</button>
                        <SocialIcon></SocialIcon>
                        <p>New to website? <Link to="/signup" className="btn btn-link">Sign up</Link></p>
                       
                    </div>

                </form>
            </div>
        </>
    );
};

export default Login;
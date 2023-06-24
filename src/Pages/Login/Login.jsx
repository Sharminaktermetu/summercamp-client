import { useForm } from "react-hook-form";
import SocialIcon from "../../Shared/SocialIcon/SocialIcon";
import { Link } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');

    const onSubmit = data => {
        console.log(data)
    };


    return (
        <>

            <div className="flex justify-center items-center rounded bg-gray-200">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-3xl text-center font-extrabold my-10">LOGIN NOW <span className="text-yellow-600">!!!</span></h2>
                    <div className="mx-auto w-9/12" >
                    <label>Name</label>
                        <input {...register("name")}
                            type="text"
                            placeholder="Enter name"
                            className="input input-bordered w-full input-warning mb-3" />

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
                        <SocialIcon></SocialIcon>
                        <p>New to website? <Link to="/signup" className="btn btn-link">Sign up</Link></p>
                        <button type="submit" className="w-full btn btn-info mb-12">SUBMIT</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Login;
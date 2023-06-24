
import { useForm } from 'react-hook-form';
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password');

    const onSubmit = (data) => {
        console.log(data); // Handle form submission here
    };

   

    return (
       <div className='w-9/12 m-auto p-16'>
             <form onSubmit={handleSubmit(onSubmit)}>
             <h2 className="text-3xl text-center font-extrabold my-10">SIGNUP NOW <span className="text-yellow-600">!!!</span></h2>
                <div className="grid grid-cols-2 gap-10 mb-7">
            <div>
                <label>Name</label>
                <input type="text"
                    className="input input-bordered w-full input-warning "
                    {...register('name', { required: true })} />
                {errors.name && <span className='text-red-600'>Please enter your name</span>}
            </div>

            <div>
                <label>Email</label>
                <input
                    className="input input-bordered w-full input-warning "
                    type="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <span className='text-red-600'>Please enter a valid email address</span>}
            </div>

            <div>
                <label>Password</label>
                <input
                    className="input input-bordered w-full input-warning "
                    type="password"
                    {...register('password', { required: true, minLength: 8 })}
                />
                {errors.password && <span className='text-red-600' >Please enter a password with at least 8 characters</span>}
            </div>

            <div>
                <label>Confirm Password</label>
                <input
                    className="input input-bordered w-full input-warning "
                    type="password"
                    {...register('confirmPassword', {
                        required: true,
                        validate: (value) => value === password,
                    })}
                />
                {errors.confirmPassword && <span className='text-red-600'>Passwords do not match</span>}
            </div>

            <div>
                <label>Photo URL</label>
                <input type="text" 
                    className="input input-bordered w-full input-warning "
                {...register('photoURL')} />
            </div>

            <div>
                <label>Gender (optional)</label>
                <input type="text"
                    className="input input-bordered w-full input-warning "
                    {...register('gender')} />
            </div>

            <div>
                <label>Phone Number (optional)</label>
                <input type="text"
                    className="input input-bordered w-full input-warning "
                    {...register('phoneNumber')} />
            </div>

            <div>
                <label>Address (optional)</label>
                <input type="text" className="input input-bordered w-full input-warning " {...register('address')} />
            </div>
            </div>
                    <SocialIcon></SocialIcon>
                    <p>Already have an account? <Link to="/login" className='btn btn-link'>Login</Link></p>
            <button type="submit" className='btn btn-info w-full mt-10'>Sign Up</button>
        </form>
       </div>
    );
};

export default Signup;


import { useForm } from 'react-hook-form';
import SocialIcon from '../../Shared/SocialIcon/SocialIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, watch,reset } = useForm();
    const password = watch('password');
    const navigate =useNavigate()
    const onSubmit = (data) => {
        
        createUser(data.email,data.password)
       
        .then((result)=>{
            const user = result.user;
            console.log(user);
            updateProfile(user, {
                displayName: data.name, 
                photoURL: data.photoURL
              })

              .then(() => {
                const savedUser= {name:data.name, email:data.email}
                fetch('http://localhost:5000/user',{
                  method:'POST',
                  headers:{'content-type':'application/json'},
                  body:JSON.stringify(savedUser)
                })
    
                  .then(res => res.json())
                  .then(data => {
                    if (data.insertedId) {
                     reset()
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User create successfully',
                        showConfirmButton: false,
                        timer: 1500
                      }) 
                      navigate('/')
                    }
                  })
    
              })
              .catch((error) => { console.log(error) })
        })
        .catch((error)=>{
            console.log(error);
        })
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

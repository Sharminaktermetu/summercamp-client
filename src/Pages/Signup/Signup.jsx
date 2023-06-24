
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>Please enter your name</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email address</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && <span>Please enter a password with at least 6 characters</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === data?.password,
          })}
        />
        {errors.confirmPassword && <span>Passwords do not match</span>}
      </div>

      <div>
        <label>Photo URL</label>
        <input type="text" {...register('photoURL')} />
      </div>

      <div>
        <label>Gender (optional)</label>
        <input type="text" {...register('gender')} />
      </div>

      <div>
        <label>Phone Number (optional)</label>
        <input type="text" {...register('phoneNumber')} />
      </div>

      <div>
        <label>Address (optional)</label>
        <input type="text" {...register('address')} />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;

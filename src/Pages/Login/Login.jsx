import { useForm } from "react-hook-form";
import SocialIcon from "../../Shared/SocialIcon/SocialIcon";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };


    return (
        <>
       
            <div className="h-screen flex justify-center items-center rounded bg-gray-200">
            
           <form onSubmit={handleSubmit(onSubmit)}>
           <h2 className="text-3xl text-center font-extrabold my-10">LOGIN NOW <span className="text-yellow-600">!!!</span></h2>
          <div className="mx-auto w-9/12" >
          <input {...register("name")} 
          type="text" 
          placeholder="Enter name" 
          className="input input-bordered w-full input-warning "/>
    
          <input {...register("email", { required: true })} 
           type="email"
           placeholder="Enter email here"
           className="input input-bordered w-full input-warning  my-8"/>

          <input {...register("email", { required: true })} 
           type="password"
           placeholder="Enter password"
           className="input input-bordered w-full input-warning mb-8"/>
          

         {errors.exampleRequired && <span>This field is required</span>}
          <SocialIcon></SocialIcon>
           <button type="submit" className="w-full btn btn-info">SUBMIT</button>
          </div>
    
  </form>
      </div>
        </>
    );
};

export default Login;
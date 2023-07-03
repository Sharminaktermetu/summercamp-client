
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

function AddClassForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user}=useAuth()
  const onSubmit = (data) => {
    const newClass = {
      className: data.className,
      classImage: data.classImage[0],
      instructorName: user.displayName,
      instructorEmail: user.email,
      availableSeats: parseInt(data.availableSeats),
      price: parseFloat(data.price),
      status: 'pending'
    };
    console.log(newClass);
    // Here you can make an API call or perform any database operation to add the class

    reset();
  };

  return (
    <div className="w-9/12 mx-auto">
    <h1 className="text-3xl font-bold mb-4 text-center">Add a Class</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="className" className="block mb-1">Class name:</label>
        <input
          type="text"
          id="className"
          {...register('className', { required: true })}
          className={`w-full p-2 border ${errors.className ? 'border-red-500 rounded' : 'border-gray-300 rounded'}`}
        />
        {errors.className && <span className="text-red-500">Class name is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="classImage" className="block mb-1">Class Image:</label>
        <input
          type="file"
          id="classImage"
          {...register('classImage', { required: true })}
          className={`w-full p-2 border ${errors.classImage ? 'border-red-500 rounded' : 'border-gray-300 rounded'}`}
        />
        {errors.classImage && <span className="text-red-500">Class image is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="instructorName" className="block mb-1">Instructor name:</label>
        <input
          type="text"
          id="instructorName"
          value={user.displayName}
          readOnly
          className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructorEmail" className="block mb-1">Instructor email:</label>
        <input
          type="email"
          id="instructorEmail"
          value={user.email}
          readOnly
          className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="availableSeats" className="block mb-1">Available seats:</label>
        <input
          type="number"
          id="availableSeats"
          {...register('availableSeats', { required: true })}
          className={`w-full p-2 border ${errors.availableSeats ? 'border-red-500 rounded' : 'border-gray-300 rounded'}`}
        />
        {errors.availableSeats && <span className="text-red-500">Available seats is required</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block mb-1">Price:</label>
        <input
          type="number"
          id="price"
          {...register('price', { required: true })}
          className={`w-full p-2 border ${errors.price ? 'border-red-500 rounded' : 'border-gray-300 rounded'}`}
        />
        {errors.price && <span className="text-red-500">Price is required</span>}
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white btn-block mb-9 rounded">Add</button>
    </form>
  </div>
  );
}

export default AddClassForm;

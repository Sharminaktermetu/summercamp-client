import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/user')
        return res.json()
    })
    const handleMakeAdmin =(id)=>{
        fetch(`http://localhost:5000/user/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount >0) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:`classe added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor =(id)=>{
        fetch(`http://localhost:5000/user/instructor/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount >0) {
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:`classe added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index)=> <tr key={user._id}>
                          
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role ==='admin'?'admin':<button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-primary btn-sm">Admin</button>
                            }</td>
                            <td>{user.role ==='instructor'?<button className="btn btn-disabled btn-sm">Instructor</button>:<button onClick={()=>handleMakeInstructor(user._id)} className="btn btn-secondary btn-sm">Instructor</button>
                            }</td>
                           
                        </tr>
                        )}
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;
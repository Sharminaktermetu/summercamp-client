import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: classess = [], refetch } = useQuery(['class'], async () => {
        const res = await axiosSecure.get(`/class`)
        return res.data
    })
    const handleApprove = async (classId) => {


        const response = await fetch(`http://localhost:5000/class/approve/${classId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Class approved`,
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            // Handle error
            console.error('Class approval failed');
        }


    };
    console.log(classess);
    return (
        <div className="grid lg:grid-cols-2 gap-10 w-10/12 mx-auto font-semibold pb-16">
            {
                classess.map(manageClass => <div key={manageClass._id} className="card w-72 bg-base-100 shadow-xl">
                    <figure><img src={manageClass.bannerImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{manageClass.instructorName}</h2>
                        <p>{manageClass.email}</p>
                        <p>Seats:{manageClass.availableSeats}</p>
                        <p>Enrolled:{manageClass.enrollmentCount}</p>
                        <p>Status: {manageClass.status}</p>
                        <div className="grid grid-cols-3 gap-5 text-orange-500">


                            {/*  */}
                            {manageClass.status === "Approved" ? (
                                <button className="btn btn-disabled btn-sm px-3" disabled>
                                    Approve
                                </button>
                            ) : (
                                <button onClick={() => handleApprove(manageClass._id)} className="btn btn-secondary btn-sm">
                                    Approve
                                </button>
                            )}

                            <button>Deny</button>
                            <button>FeedBack</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};
export default ManageClass;
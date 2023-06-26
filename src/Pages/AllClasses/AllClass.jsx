import {useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const AllClass = ({ activity }) => {
    const { instructorName, bannerImage, ratings, enrollmentCount, price, availableSeats } = activity;
    const{user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    
    const handleOrder=(activity)=>{
        console.log(activity);
        if(user){
            fetch('http://localhost:5000/cart',{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(orderItem)
            })
            .then(res=>res.json())
            .then(data=>{
              if (data.insertedId) {
                refetch()
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title:`${name} added to cart`,
                  showConfirmButton: false,
                  timer: 1500
                })
              }
             
            })
            
          }
          else{
            Swal.fire({
              title: 'Log in first',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Log in!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state:{from:location}})
              }
            })
          }
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl space-x-5">
            <figure><img src={bannerImage} alt="Shoes" className="h-72" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructorName}</h2>
                <p>Ratings:{ratings}</p>
                <p>Enroll: {enrollmentCount}</p>
                <div className="flex font-bold">
                      
                    <p>Price:{price}</p>
                    <p>Available Seats:{availableSeats}</p>
                    </div>
                <div className="card-actions justify-end">
                    
                   
             
              <button className="btn btn-info" onClick={()=>{handleOrder(activity)}}>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllClass;
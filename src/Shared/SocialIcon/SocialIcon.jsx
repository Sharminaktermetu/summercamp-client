
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const SocialIcon = () => {
  const {googleLog}=useAuth();
  const navigate =useNavigate();
  const handleGoogleLogin=()=>{
    googleLog()
    .then(()=>{
      navigate('/')
    })
    .catch((error)=>{console.log(error)})
  }
    return (
        <div className="text-center">
            <div className="divider"> <h2>or login with</h2> </div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
              <FaGoogle></FaGoogle>
            </button>
              <div className="divider"></div>
        </div>
    );
};

export default SocialIcon;
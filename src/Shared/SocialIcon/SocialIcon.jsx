
import { FaGoogle } from "react-icons/fa";
const SocialIcon = () => {
    return (
        <div className="text-center">
            <div className="divider"> <h2>or login with</h2> </div>
            <button className="btn btn-circle btn-outline">
              <FaGoogle></FaGoogle>
            </button>
              <div className="divider"></div>
        </div>
    );
};

export default SocialIcon;
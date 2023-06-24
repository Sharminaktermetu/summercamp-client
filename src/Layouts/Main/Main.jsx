import { Outlet } from "react-router-dom";
import Navber from "../../Shared/Navbar/Navber";
import Footer from "../../Shared/Footer/Footer";



const Main = () => {
    return (
        <div>
          <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
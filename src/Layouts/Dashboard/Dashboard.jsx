import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
  // Todo: update admin and instructor
  // const isAdmin = true;
  // const isInstructor =true;

  const [isAdmin]=useAdmin();
  const [isInstructor]=useInstructor();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        
        <div className="drawer-side rounded-lg">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-orange-200 h-1/2 text-base-content">
            {/* Sidebar content here */}
            {isAdmin && (
              <>
                <Link to="/dashboard/alluser">
                <li>
                  <a>All users</a>
                </li>
              </Link>
                <Link to="/dashboard/manageclass">
                <li>
                  <a>Manage Classess</a>
                </li>
              </Link>
              </>
            )}
            {isInstructor && (
             <>
               <Link to="/dashboard/addaclass">
              <li>
                <a>Add a class</a>
              </li>
            </Link>
              <Link to="/dashboard/myclassess">
              <li>
                <a>My classes</a>
              </li>
            </Link>
             </>
            )}

            {!isAdmin  && !isInstructor && (
              <>
                
              <Link to="/dashboard/selectedclass">
              <li>
                <a>Selected class</a>
              </li>
            </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

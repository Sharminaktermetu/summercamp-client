import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // Todo: update admin and instructor
  const isAdmin = true;
  const isInstructor =true;

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
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
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
              <Link to="/dashboard/instructor">
              <li>
                <a>Instructor user route</a>
              </li>
            </Link>
            )}
            {!isAdmin && !isInstructor && (
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

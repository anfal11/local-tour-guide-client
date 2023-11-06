import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("User Logout successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    setUserProfile({
      name: user?.displayName,
      photo: user?.photoURL,
    });
  }, [user?.displayName, user?.photoURL]);

  return (
    <div className="mb-10">
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav
          className="mt-6 relative max-w-7xl w-full bg-white mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <NavLink
              className="flex-none text-xl font-semibold "
              aria-label="TourNest"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-12"
                  src="https://i.ibb.co/pfQC28M/travel.png"
                  alt=""
                />
                <h1 className="font-mono">TravelEase</h1>
              </div>
            </NavLink>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-4 md:mt-0 md:pl-7">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-gray-500 hover:text-gray-400 border-b-2 border-[#4D96B3]"
                    : "text-lg"
                }
                to="/"
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-gray-500 hover:text-gray-400 border-b-2 border-[#4D96B3]"
                    : "text-lg"
                }
                to="/allService"
              >
                All Service
              </NavLink>
              {user?.email ? (
                <div>
                  <h1 onClick={handleLogOut} className="text-lg cursor-pointer">
                    Log Out
                  </h1>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600md:border-gray-300"
                      : "text-lg"
                  }
                  to="/login"
                >
                  <div className="flex gap-x-1 items-center">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Log in
                  </div>
                </NavLink>
              )}
              {user?.email && (
                <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                  <button type="button" className="text-lg mt-2 ">
                    Dashboard
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:shadow-md rounded-lg p-2 md:dark:border before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5 flex flex-col">
                    <Link
                      className="text-lg font-medium text-gray-500 hover:text-gray-400"
                      to="/manageService"
                    >
                      Manage Service
                    </Link>

                    <Link
                      className="text-lg font-medium text-gray-500 hover:text-gray-400"
                      to="/addServices"
                    >
                      Add Services
                    </Link>
                    <Link
                      className="text-lg font-medium text-gray-500 hover:text-gray-400"
                      to="/mySchedule"
                    >
                      My Schedule
                    </Link>
                  </div>
                </div>
              )}
              {user?.email && (
                <h1 className="text-lg border p-1 rounded-md shadow-md">
                  {" "}
                  {userProfile?.name}{" "}
                </h1>
              )}

              {user?.email && (
                <>
                  <div className="relative inline-block">
                    <img
                      className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={userProfile?.photo}
                      alt="Image Description"
                    />
                    <span className="absolute top-0 md:right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

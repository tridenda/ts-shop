import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const { currentUser, onSignOut } = useContext(AuthenticationContext);

  const onSignOutHandler = () => {
    onSignOut();
    navigate("/signin");
  };

  return (
    <div className="flex justify-between items-center w-full max-w-md p-2 my-5 bg-white border border-gray-200 rounded-lg shadow sm:px-8 dark:bg-gray-800 dark:border-gray-700">
      <p className="text-lg font-bold leading-none text-gray-900 dark:text-white">
        {currentUser?.fullname}
      </p>
      <button
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
        onClick={onSignOutHandler}
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserInfo;

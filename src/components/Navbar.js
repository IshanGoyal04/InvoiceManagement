import { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";

const MainNavigation = () => {
  const userCtx = useContext(UserContext);
  const logoutHandler = () => {
    userCtx.logout();
    // optional: redirect the user
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/invoice">Profile</Link>
          </li>

          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

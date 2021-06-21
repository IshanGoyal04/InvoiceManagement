import { Fragment, useContext } from "react";
import UserContext from "../contexts/UserContext";
import MainNavigation from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <Fragment>
      {userCtx.isLoggedIn && (
        <>
          <MainNavigation />
        </>
      )}
      <main>{props.children}</main>
      {userCtx.isLoggedIn && (
        <>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Layout;

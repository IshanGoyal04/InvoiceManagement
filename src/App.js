import React from "react";
import "./App.css";
import InvoiceScreen from "./screens/InvoiceScreen";
import InvoicesScreen from "./screens/InvoicesScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Loginin from "./screens/Loginin";
import Invoice from "./screens/Invoices";
import UserContext from "./contexts/UserContext";
import { useContext } from "react";
import Layout from "./components/Layout";
import Registerin from "./screens/RegisterIn";
import UsersLists from "./screens/UsersLists";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  const userCtx = useContext(UserContext);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Invoice</Link>
          </div>
          <div className="header-links">
            {/**  <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>*/}
            <Link to="/signin">Logout</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Invoice Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Paid</a>
            </li>
            <li>
              <a href="index.html">Unpaid</a>
            </li>
            <li>
              <a href="index.html">Drafted</a>
            </li>
            <li>
              <a href="index.html">Cancelled</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/invoice/:id" component={InvoiceScreen} />
            <Route path="/" exact={true} component={InvoicesScreen} />
          </div>
        </main>
        <footer className="footer">All rights resererved</footer>
      </div>
      <Layout>
        <Switch>
          <Route path="/signin">
            <Loginin />
          </Route>

          <Route path="/signup">
            <Registerin />
          </Route>

          <Route path="/getUsers">
            <UsersLists />
          </Route>

          <Route path="/invoice">
            {userCtx.isLoggedIn && (
              <>
                <Invoice />
              </>
            )}
            {!userCtx.isLoggedIn && <Redirect to="/signin" />}
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

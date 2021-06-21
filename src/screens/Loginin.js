import logo from "../assets/logo.png";
import Login from "../components/LoginForm";

const Loginin = () => {
  return (
    <div>
      <div className="forms-container">
        <div className="signin">
          <Login></Login>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <img
              height="300px"
              className="logo"
              width="300px"
              src={logo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginin;

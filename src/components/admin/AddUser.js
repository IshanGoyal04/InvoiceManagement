import React from "react";
import useInput from "../../hooks/useInput";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const history = useHistory();
  const {
    value: enteredemail,
    isValid: enteredemailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredname,
    isValid: enterednameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetenameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: entereddesignation,
    isValid: entereddesignationIsValid,
    hasError: designationInputHasError,
    valueChangeHandler: designationChangedHandler,
    inputBlurHandler: designationBlurHandler,
    reset: resetdesignationInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: entereddepartment,
    isValid: entereddepartmentIsValid,
    hasError: departmentInputHasError,
    valueChangeHandler: departmentChangedHandler,
    inputBlurHandler: departmentBlurHandler,
    reset: resetdepartmentInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterednumber,
    isValid: enterednumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangedHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetnumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetpasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredemailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredemailIsValid ||
      !entereddepartmentIsValid ||
      !entereddesignationIsValid ||
      !enterednameIsValid ||
      !enterednumberIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }
    resetemailInput();
    resetpasswordInput();
    resetenameInput();
    resetdepartmentInput();
    resetnumberInput();
    resetdesignationInput();
    console.log("sending req");
    fetch("http://localhost:8000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredemail,
        name: enteredname,
        number: enterednumber,
        designation: entereddesignation,
        department: entereddepartment,
        password: enteredPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("error");
        } else {
          const token = data.token;
          localStorage.setItem("token", token);
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const emailInputClasses = emailInputHasError
    ? "input-field invalid"
    : "input-field";

  const nameInputClasses = nameInputHasError
    ? "input-field invalid"
    : "input-field";

  const departmentInputClasses = departmentInputHasError
    ? "input-field invalid"
    : "input-field";

  const designationInputClasses = designationInputHasError
    ? "input-field invalid"
    : "input-field";

  const numberInputClasses = numberInputHasError
    ? "input-field invalid"
    : "input-field";

  const passwordInputClasses = passwordInputHasError
    ? " input-field invalid"
    : "input-field";

  return (
    <>
      <form onSubmit={formSubmissionHandler} className="signin-form">
        <h2 className="title">Sign Up</h2>
        <div className={emailInputClasses}>
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredemail}
            placeholder="Enter your email"
          />
        </div>
        {emailInputHasError && (
          <p className="error-text">Enter a valid email.</p>
        )}
        <div className={nameInputClasses}>
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredname}
            placeholder="Enter your Name"
          />
        </div>
        {nameInputHasError && <p className="error-text">Enter a valid name.</p>}

        <div className={designationInputClasses}>
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="designation"
            onChange={designationChangedHandler}
            onBlur={designationBlurHandler}
            value={entereddesignation}
            placeholder="Enter your designation"
          />
        </div>
        {designationInputHasError && (
          <p className="error-text">Enter a valid designation.</p>
        )}

        <div className={departmentInputClasses}>
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="department"
            onChange={departmentChangedHandler}
            onBlur={departmentBlurHandler}
            value={entereddepartment}
            placeholder="Enter your department"
          />
        </div>
        {departmentInputHasError && (
          <p className="error-text">Enter a valid department.</p>
        )}

        <div className={numberInputClasses}>
          <i className="fa fa-user"></i>
          <input
            type="text"
            id="number"
            onChange={numberChangedHandler}
            onBlur={numberBlurHandler}
            value={enterednumber}
            placeholder="Enter your number"
          />
        </div>
        {numberInputHasError && (
          <p className="error-text">Enter a valid number.</p>
        )}

        <div className={passwordInputClasses}>
          <i className="fa fa-lock"></i>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            placeholder="Password"
          />
        </div>
        {passwordInputHasError && (
          <p className="error-text">Enter a valid password.</p>
        )}
        <button type="submit" className="btn" disabled={!formIsValid}>
          Register
        </button>
      </form>
    </>
  );
};
export default AddUser;

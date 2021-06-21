import { useReducer } from "react";

const BillForm = (props) => {
  const billReducer = (state, action) => {
    if (action.type === "EMAIL_INPUT") {
      return {
        ...state,
        email: action.val,
        emailIsValid: action.val.includes("@"),
      };
    }
    if (action.type === "EMAIL_BLUR") {
      return {
        ...state,
        email: state.email,
        emailIsValid: state.email.includes("@"),
      };
    }
    if (action.type === "NAME_INPUT") {
      return { ...state, name: action.val, nameIsValid: !!action.val.trim() };
    }
    if (action.type === "NAME_BLUR") {
      return { ...state, name: state.name, nameIsValid: !!state.name.trim() };
    }
    if (action.type === "ADDRESS_INPUT") {
      return {
        ...state,
        address: action.val,
        addressIsValid: !!action.val.trim(),
      };
    }
    if (action.type === "ADDRESS_BLUR") {
      return {
        ...state,
        address: state.address,
        addressIsValid: !!state.address.trim(),
      };
    }
    if (action.type === "NUMBER_INPUT") {
      return {
        ...state,
        number: action.val,
        numberIsValid: !!action.val.trim(),
      };
    }
    if (action.type === "NUMBER_BLUR") {
      return {
        ...state,
        number: state.number,
        numberIsValid: !!state.number.trim(),
      };
    }
    return {
      email: "",
      emailIsValid: false,
      address: "",
      addressIsValid: false,
      name: "",
      nameIsValid: false,
      number: "",
      numberIsValid: false,
    };
  };

  const [billState, dispatchBill] = useReducer(billReducer, {
    email: "",
    emailIsValid: false,
    address: "",
    addressIsValid: false,
    name: "",
    nameIsValid: false,
    number: "",
    numberIsValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchBill({ type: "EMAIL_INPUT", val: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatchBill({ type: "EMAIL_BLUR" });
  };

  const nameChangeHandler = (event) => {
    dispatchBill({ type: "NAME_INPUT", val: event.target.value });
  };
  const validateNameHandler = () => {
    dispatchBill({ type: "NAME_BLUR" });
  };

  const addressChangeHandler = (event) => {
    dispatchBill({ type: "ADDRESS_INPUT", val: event.target.value });
  };
  const validateAddressHandler = () => {
    dispatchBill({ type: "ADDRESS_BLUR" });
  };

  const numberChangeHandler = (event) => {
    dispatchBill({ type: "NUMBER_INPUT", val: event.target.value });
  };
  const validateNumberHandler = () => {
    dispatchBill({ type: "NUMBER_BLUR" });
  };

  return (
    <form>
      <div>
        <input
          type="email"
          id="email"
          value={billState.email}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          placeholder="Email"
        ></input>
      </div>
      <div>
        {props.clicked && billState.emailIsValid !== true
          ? "Enter a valid Email"
          : ""}
      </div>
      <div>
        <input
          type="text"
          id="name"
          value={billState.name}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
          placeholder="Name"
        ></input>
      </div>
      <div>
        {props.clicked && billState.nameIsValid !== true
          ? "Enter a valid name"
          : ""}
      </div>
      <div>
        <input
          type="text"
          id="address"
          value={billState.address}
          onChange={addressChangeHandler}
          onBlur={validateAddressHandler}
          placeholder="Address"
        ></input>
      </div>
      <div>
        {props.clicked && billState.addressIsValid !== true
          ? "Enter a valid address"
          : ""}
      </div>
      <div>
        <input
          type="text"
          id="number"
          value={billState.number}
          onChange={numberChangeHandler}
          onBlur={validateNumberHandler}
          placeholder="Mobile No."
        ></input>
      </div>
      <div>
        {props.clicked && billState.numberIsValid !== true
          ? "Enter a valid number"
          : ""}
      </div>
    </form>
  );
};

export default BillForm;

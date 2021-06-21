import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listInvoices } from "../actions/invoiceActions";
//import axios from "axios";
const InvoicesScreen = () => {
  //const [invoices, setInvoices] = useState([]);
  const invoiceList = useSelector((state) => state.invoiceList);
  const { invoices, loading, error } = invoiceList;
  const disptach = useDispatch();
  useEffect(() => {
    //const fetchData = async () => {
    //  const { data } = await axios.get("/api/invoices");
    //  //data is predefined in axios so we used const{data} to fetch the data present at /api/products
    //  setInvoices(data);
    //};
    //fetchData();
    disptach(listInvoices());

    return () => {};
  }, [disptach]);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>error</div>
  ) : (
    <ul className="invoices">
      {invoices.map((invoice) => (
        <li>
          <div className="invoice">
            <Link to={"/invoice/" + invoice._id}>
              <img
                className="invoice-image"
                src={invoice.image}
                alt="invoice"
              />
            </Link>

            <div className="invoice-number">
              <Link to={"/invoice/" + invoice._id}>{invoice.number}</Link>
            </div>
            <div className="invoicer-name">{invoice.creator}</div>
            <div className="invoice-total">{invoice.total}</div>
            <div className="invoice-status">{invoice.status}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InvoicesScreen;

import React, { useEffect } from "react";
import "./InvoiceScreen.css";
import download from "../assets/download.png";
import { Link } from "react-router-dom";
//import Data from "../Data";
import { useDispatch, useSelector } from "react-redux";
import { detailsInvoice } from "../actions/invoiceActions";

const InvoiceScreen = (props) => {
  //console.log(props.match.params.id); // we can access our product id through this
  //const invoice = Data.invoices.find((x) => x._id === props.match.params.id);
  const invoiceDetails = useSelector((state) => state.invoiceDetails);
  const { invoice, loading, error } = invoiceDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsInvoice(props.match.params.id));
    return () => {};
  }, [dispatch, props.match.params.id]);
  return (
    <div>
      <div classNameName="back-to-result">
        <Link to="/">Back to Invoices</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="invoice1">
          <div className="invoice-logo">
            <img src={download} alt=""></img>
          </div>
          <div className="invoice-sec-1">
            <div className="invoice-sec-1-ref">
              <div className="ref-no">
                <p>
                  Ref: Association Member -{" "}
                  <span>{invoice.associationNumber}</span>
                </p>
                <p>
                  Invoice No: <span>{invoice.number}</span>
                </p>
              </div>
              <div className="to-invoice">
                <p>To</p>

                <p>
                  Attn: <span>{invoice.customerName}</span>
                </p>
              </div>
            </div>
            <div className="invoice-sec-1-date">
              <p>
                Date: <span>{invoice.date}</span>
              </p>
            </div>
          </div>
          <div className="invoice-banner">
            <div className="banner-d">
              <p>Invoice</p>
            </div>
          </div>
          {/**Later it will be converted to table format */}
          <div className="invoice-table">
            <div className="invoice-table-container">
              <div className="invoice-table-data">
                <div className="invoice-table-sl invoice-table-sl-h">
                  <strong>
                    <p>Sl. No</p>
                  </strong>
                </div>
                <div className="invoice-table-desc invoice-table-desc-h">
                  <strong>
                    <p>Description</p>
                  </strong>
                </div>
                <div className="invoice-table-amount invoice-table-amount-h">
                  <strong>
                    <p>Amount</p>
                  </strong>
                </div>
              </div>
              <div className="invoice-table-data">
                <div className="invoice-table-sl">
                  <p>01</p>
                </div>
                <div className="invoice-table-desc">
                  <p>
                    Annual Fee for Association Memeber (November - December 2019
                  </p>
                </div>
                <div className="invoice-table-amount">
                  <p>{invoice.subtotal}</p>
                </div>
              </div>
              <div className="invoice-table-footer">
                <div className="invoice-total">
                  <p>Total</p>
                </div>
                <div className="invoice-total-amount">
                  <p>{invoice.total}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-declaration">
            <p>
              Please pay cash directly to any UCBL branch and send us the
              invoice with bank & signature
            </p>
          </div>
          <div className="invoice-greeting">
            <p>Thank You</p>
            <p>{invoice.creator}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceScreen;

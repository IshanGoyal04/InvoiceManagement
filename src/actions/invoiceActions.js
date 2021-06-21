import {
  INVOICE_LIST_FAIL,
  INVOICE_LIST_REQUEST,
  INVOICE_LIST_SUCCESS,
  INVOICE_DETAILS_FAIL,
  INVOICE_DETAILS_REQUEST,
  INVOICE_DETAILS_SUCCESS,
} from "../constants/invoiceConstants";
import axios from "axios";

const listInvoices = () => async (disptach) => {
  try {
    disptach({ type: INVOICE_LIST_REQUEST });
    const { data } = await axios.get("/api/invoices");
    //data is predefined in axios so we used const{data} to fetch the data present at /api/invoices
    disptach({ type: INVOICE_LIST_SUCCESS, payload: data });
  } catch (error) {
    disptach({ type: INVOICE_LIST_FAIL, payload: error.message });
  }
};

const detailsInvoice = (invoiceId) => async (disptach) => {
  try {
    disptach({ type: INVOICE_DETAILS_REQUEST, payload: invoiceId });
    const { data } = await axios.get("/api/invoices/" + invoiceId);
    disptach({ type: INVOICE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    disptach({ type: INVOICE_DETAILS_FAIL, payload: error.message });
  }
};

export { listInvoices, detailsInvoice };

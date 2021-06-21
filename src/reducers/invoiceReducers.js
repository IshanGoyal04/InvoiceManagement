import {
  INVOICE_LIST_FAIL,
  INVOICE_LIST_REQUEST,
  INVOICE_LIST_SUCCESS,
  INVOICE_DETAILS_FAIL,
  INVOICE_DETAILS_REQUEST,
  INVOICE_DETAILS_SUCCESS,
} from "../constants/invoiceConstants";

function invoiceListReducer(state = { invoices: [] }, action) {
  switch (action.type) {
    case INVOICE_LIST_REQUEST:
      return { loading: true };
    case INVOICE_LIST_SUCCESS:
      return { loading: false, invoices: action.payload };
    case INVOICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function invoiceDetailsReducer(state = { invoice: {} }, action) {
  switch (action.type) {
    case INVOICE_DETAILS_REQUEST:
      return { loading: true };
    case INVOICE_DETAILS_SUCCESS:
      return { loading: false, invoice: action.payload };
    case INVOICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { invoiceListReducer, invoiceDetailsReducer };

import { csrfFetch } from "./csrf";

const GET_INVOICES = "session/getUserInvoices";

const getUserInvoices = (invoices) => {
  return {
    type: GET_INVOICES,
    invoices,
  };
};
export const fetchInvoices = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/activity/${id}`);
  const data = await response.json();
  dispatch(getUserInvoices(data.invoices));
  return response;
};

const invoiceReducer = (state = { invoice: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_INVOICES:
      newState = Object.assign({}, state);
      newState = action.invoices;
      return newState;
    default:
      return state;
  }
};
export default invoiceReducer;

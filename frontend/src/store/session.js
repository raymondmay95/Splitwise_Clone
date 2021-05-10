import { csrfFetch } from "./csrf";
const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const INVOICES = "session/invoices";

//ToDo:   1. create action and thunk action to update account balance
//ToDo:   2. dispatch
//ToDo:   3. update postgres

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return data;
};
export const signup = (user) => async (dispatch) => {
  const { fullName, email, password, photo } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      fullName,
      email,
      password,
      photo,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

const invoices = (user, { invoices }) => {
  return {
    type: INVOICES,
    payload: (user.invoices = invoices),
  };
};

export const invoicesThunk = (user) => async (dispatch) => {
  let id = user.id;
  const response = await csrfFetch(`/api/activity/${id}`, { method: "GET" });
  let userInvoices = await response.json();
  dispatch(invoices(user, userInvoices));
  return userInvoices;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case INVOICES:
      newState = Object.assign({}, state);
      newState.invoices = action.payload;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;

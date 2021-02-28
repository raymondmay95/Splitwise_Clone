import { csrfFetch } from "./csrf";
const UPDATEACCOUNT = "accountBalance,setAccountBalance";
const setAccountBalance = (id, amount) => ({
  type: UPDATEACCOUNT,
  payload: [id, amount],
});

export const updateAccount = (id, value) => {
  return async (dispatch) => {
    const amount = await csrfFetch("/api/user/account", {
      method: "POST",
      body: JSON.stringify({ id, value }),
    });
    const data = amount.json();
    dispatch(setAccountBalance(data));
  };
};

const data = [];
export default function accountReducer(state = data, action) {
  let response;
  switch (action.type) {
    case UPDATEACCOUNT:
      response = action.accountBalance;
      return response;
    default:
      return state;
  }
}

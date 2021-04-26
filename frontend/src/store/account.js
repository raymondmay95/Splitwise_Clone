import { csrfFetch } from "./csrf";

const GETBALANCE = "balance/setBALANCE";

const setBALANCE = (balance) => ({
  type: GETBALANCE,
  payload: balance,
});

export const getAccountBalance = () => {
  return async (dispatch) => {
    const data = await csrfFetch("/api/user/balance", {
      method: "get",
    });
    if (data.ok) {
      let balance = await data.json();
      console.log(balance);
      dispatch(setBALANCE(balance));
    } else {
      dispatch(setBALANCE({ error: ["couldn't fetch account balance", 404] }));
    }
  };
};

const data = { accountBalance: null };
export default function accountReducer(state = data, action) {
  switch (action.type) {
    case GETBALANCE:
      return action.payload;
    default:
      return state;
  }
}

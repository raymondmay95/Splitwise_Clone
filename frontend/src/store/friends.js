import { csrfFetch } from "./csrf";

const GET_FRIENDS = "comments/getFriends";

const getFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

export const fetchFriends = (id) => {
  return async (dispatch) => {
    const res = await csrfFetch(`/api/friends/${id}`);
    const friends = await res.json();
    // console.log("flag ", friends);
    dispatch(getFriends(friends));
    return friends;
  };
};
const initialState = { friends: null, isLoaded: false };
export default function friendsReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_FRIENDS:
      newState = Object.assign({}, state);
      newState.user = action.friends;
      return newState;
    default:
      return state;
  }
}

import { csrfFetch } from "./csrf";

const GET_COMMENTS = "comments/getComments";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  comments,
});

export const fetchComments = (id) => {
  return async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${id}`);
    const comment = await res.json();
    // console.log("flag ", comment.data);
    dispatch(getComments(comment.data));
    return comment.data;
  };
};

export default function commentReducer(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return [...state, ...action.comments];
    default:
      return state;
  }
}

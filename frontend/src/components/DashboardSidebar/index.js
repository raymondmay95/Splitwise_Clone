import { useEffect } from "react";
import { fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../store/friends";
import { fetchInvoices } from "../../store/invoices";
import "./dashboardSidebar.css";

const DASHBOARDSIDEBAR_LEFT = ({ sessionUser }) => {
  const { user } = useSelector((state) => state.friends);
  const comments = useSelector((state) => state.comments);
  const { id } = sessionUser;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(id));
    dispatch(fetchFriends(id));
    dispatch(fetchInvoices(id));
  }, [dispatch, id]);
  const CommentsSub = () => {
    const userComments = comments.map((comment, i) => (
      <h3 className={`comment comment_${i}`}>{`${comment.createdAt.slice(
        0,
        10
      )}: \n ${comment.comment}`}</h3>
    ));

    return userComments;
  };

  const FriendsSub = () => {
    let res = <div></div>;
    if (user) {
      res = user.map((ele) => (
        <div className="friends-name">{ele.fullName}</div>
      ));
    }
    return res;
  };

  return (
    <div className="sidebar">
      <CommentsSub className="comments" />
      <h3 className="friends-title">Your Friends</h3>
      <FriendsSub className="friends" />
    </div>
  );
};

export default DASHBOARDSIDEBAR_LEFT;

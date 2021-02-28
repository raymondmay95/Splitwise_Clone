import { useEffect } from "react";
import { fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../store/friends";
import "./dashboardSidebar.css";

const DashboardSidebar = ({ sessionUser }) => {
  const { user } = useSelector((state) => state.friends);
  const comments = useSelector((state) => state.comments);
  const { id } = sessionUser;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments(id));
    dispatch(fetchFriends(id));
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
      res = user.map((ele) => <h1 className="friends-name">{ele.fullName}</h1>);
    }
    return res;
  };

  return (
    <div className="sidebar">
      <CommentsSub className="comments" />
      <FriendsSub className="friends" />
    </div>
  );
};

export default DashboardSidebar;

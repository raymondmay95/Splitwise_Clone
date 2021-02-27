import { useEffect } from "react";
import { fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../store/friends";

const DashboardSidebar = () => {
  const CommentsSub = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const { id } = sessionUser;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchComments(id));
    }, [dispatch, id]);
    const comments = useSelector((state) => state.comments);
    const userComments = comments.map((comment) => <h3>{comment.comment}</h3>);

    return userComments;
  };

  const FriendsSub = () => {
    const sessionUser = useSelector((state) => state.session.user);

    const { id } = sessionUser;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchFriends(id));
    }, [dispatch, id]);
    const { user } = useSelector((state) => state.friends);
    let res = <div></div>;
    if (user) {
      res = user.map((ele) => <h1>{ele.fullName}</h1>);
    }
    return res;
  };

  return (
    <div>
      <CommentsSub />
      <FriendsSub />
    </div>
  );
};

export default DashboardSidebar;

import { useEffect, useState } from "react";
import { fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../store/friends";

const DashboardSidebar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const CommentsSub = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const { id } = sessionUser;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchComments(id)).then(() => setIsLoaded(true));
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
    console.log("FLLLAAAAGGG", user);
    let res;
    if (user) {
      res = user.map((ele) => console.log(ele.fullName));
    }
    return <h1>test</h1>;
  };

  return (
    <div>
      <CommentsSub />
      <FriendsSub />
    </div>
  );
};

export default DashboardSidebar;
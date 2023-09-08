import { useState, useMemo } from "react";
import { getCurrentTiemstamp } from "../../../helpers/useMoment";
import "./index.scss";
import ModalComponent from "../../Common/Modal/index";
import { getStatus, postStatus } from "../../../api/FirestoreApi";
import PostCard from "../PostCard/index";
import { getUniqueId } from "../../../helpers/getUniqueId";
const PostStatus = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  const sendStatus = () => {
    let object = {
      status: status,
      timestamp: getCurrentTiemstamp("LLL"),
      userEmail: userEmail,
      userName: currentUser.name,
      postId: getUniqueId(),
    };
    postStatus(object);
    setStatus("");
    setModalOpen(false);
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
        <ModalComponent
          status={status}
          setStatus={setStatus}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          sendStatus={sendStatus}
        />
      </div>
      <div className="post-cards">
        {allStatus.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostStatus;

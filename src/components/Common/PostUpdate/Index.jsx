import { useState } from "react";
import "./index.scss";
import ModalComponent from "../../Common/Modal/index";
import { postStatus } from "../../../api/FirestoreApi";
const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [status, setStatus] = useState("");

  const sendStatus = () => {
    postStatus(status);
    setStatus("");
    setModalOpen(false);
  };

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
    </div>
  );
};

export default PostStatus;

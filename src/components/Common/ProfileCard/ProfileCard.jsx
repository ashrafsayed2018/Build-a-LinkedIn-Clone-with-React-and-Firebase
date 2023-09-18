import { useState, useMemo } from "react";
import "./profileCard.scss";
import PostCard from "../PostCard/index";
import { getStatus } from "../../../api/FirestoreApi";

export default function ProfileCard({ currentUser, onedit }) {
  const [allStatus, setAllStatus] = useState([]);
  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  return (
    <>
      {
        <div className="profile-card">
          <div className="edit-btn">
            <button onClick={onedit}>edit</button>
          </div>
          <div className="profile-info">
            <div>
              <h1 className="userName">{currentUser.name}</h1>
              <p className="headline">{currentUser.headline}</p>
              <p className="location">{currentUser.location}</p>
            </div>
            <div className="right-info">
              <p className="collage">{currentUser.collage}</p>
              <p className="company">{currentUser.company}</p>
            </div>
          </div>
        </div>
      }
      <div className="post-status-main">
        {allStatus
          .filter((item) => {
            return item.userEmail === localStorage.getItem("userEmail");
          })
          .map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </div>
    </>
  );
}

import "./index.scss";

const PostCard = (data) => {
  return (
    <div className="posts-card">
      <p className="author-name">{data.post.userName}</p>
      <p className="post-date">{data.post.timestamp}</p>
      <p className="status">{data.post.status}</p>
    </div>
  );
};

export default PostCard;

import PostStatus from "./Common/PostUpdate/Index";

export const HomeComponent = ({ currentUser }) => {
  return (
    <div className="home-component">
      <PostStatus currentUser={currentUser} />
    </div>
  );
};

import "./profileCard.scss";
export default function ProfileCard({ currentUser, onedit }) {
  return (
    <>
      {
        <div className="profile-card">
          <div className="edit-btn">
            <button onClick={onedit}>edit</button>
          </div>
          <h1 className="userName">{currentUser.name}</h1>
          <p className="userEmail">{currentUser.email}</p>
        </div>
      }
    </>
  );
}

import { useContext } from 'react';
import { AuthContext } from '../contexts';
import '../styles/UserProfile.css';

function UserProfile() {
  const { user, logout, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <div className="user-profile empty">Not logged in</div>;
  }

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Login Time:</strong> {user.loginTime}</p>
        <p><strong>User ID:</strong> {user.id.toFixed(4)}</p>
      </div>
      <button onClick={logout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default UserProfile;

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
    const { name, following, followers, login, created_at, avatar_url } = user;
  
    return (
      <div className="user-card">
        <img src={avatar_url} alt={`${login}'s avatar`} />
        <div>
          <h2>{name}</h2>
          <p>Login: {login}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Joined: {new Date(created_at).toLocaleDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default UserCard;
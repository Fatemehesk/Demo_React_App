import  { useState } from "react";
import  UserCard from "./UserCard";
import "./style.css";
const GitHubProfile = () => {
    const[userProfile,SetUserProfile]=useState("");
    const[loading,setLoading]=useState(false);
    const[userData,setUser]=useState(null);
    const profileSetHandler=(event)=>{
        SetUserProfile(event.target.value);
    }

    const SerchProfileHandler = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userProfile}`);
        const data = await res.json();
        
        if (res.ok) {
          setUser(data);
        } else {
          console.error(`Error: ${data.message}`);
          setUser(null);
        }
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
console.log(userData);
  return (
    <div className="search-container">
      <input placeholder="GithubProfile" value={userProfile} onChange={profileSetHandler}/>
      <button onClick={SerchProfileHandler}>Search</button>
     {loading && <h3>LOADING</h3>}
     {userData && userData !== undefined && <UserCard user={userData} />}
    </div>
  );
};

export default GitHubProfile;
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./style.css";

const SuggestUser = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [matchedUsers, setMatchedUsers] = useState([]);

  const serchUserHandler = (event) => {
    const query = event.target.value.toLowerCase(); // Convert the query to lowercase
    setUser(query);
    if (query.length > 1) {
      const matchedUsers = users.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setMatchedUsers(matchedUsers);
      // Now 'matchedUsers' will contain an array of users whose names include the search query
    }
    else if(query.length ==0){
        setMatchedUsers([]);
        
    }

  };
const paramClickedhandler=(item)=>{
setUser(item);
setMatchedUsers([]);
}
  const fetchDataHandler = async () => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/users`);
    const data = await res.json();
    if (data) {
      setUsers(data.users.map((item) => item.firstName));
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDataHandler();
  }, []);

  return (<>
  <div className="serch-user">
      {!loading && (
        <input
          placeholder="Serch For user"
          value={user}
          onChange={serchUserHandler}
        />
      )}
      {matchedUsers && matchedUsers.length !== 0 ? (
        <ul>
          {matchedUsers.map((item, index) => {
            return <li key={index} onClick={() => paramClickedhandler(item)}>{item}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
    <ul style={{listStyle:"none"}}>{users && users.length !== 0 && users.map((item, index) => {
    return <li  style={{backgroundColor:"#d1c4c4", marginTop:"4px"}} key={index}>{item}</li>;
  })}</ul>
  </>
    
  );
};

export default SuggestUser;

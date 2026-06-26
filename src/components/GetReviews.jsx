import { useState, useEffect } from 'react';
import axios from "axios";

export default function GetReviews() {
  const [users, setUsers] = useState([]);

  // Fetch data from JSON Placeholder
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setUsers(response.data); // Fetch all users
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);
      
  return(
    <>
      <div className="user-container">
        <h2 className="header">Comments from Reviewers</h2>
        <div className="card-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-detail">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="user-detail">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="user-detail">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="user-detail">
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.city}
              </p>
              <p className="user-detail">
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );    

}
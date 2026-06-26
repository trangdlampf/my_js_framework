import { useState, useEffect } from 'react';
import axios from "axios";
import "./GetUsers.css";

const reactDescriptions2 = ['3', '4', '5'];
function genRandomInt2(max) {
  return Math.floor(Math.random() * (max + 1));
} 

export default function GetReviews() {
  const [users, setUsers] = useState([]);

  const description2 = reactDescriptions2[genRandomInt2(2)]; // uses genRandomInt() to get 0,1,2 

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
        <h2 className="header">Reviews from Users</h2>
        <div className="card-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-detail">
                {user.address.city}
              </p>
              <h2 className="user-detail strong">Review: {description2} Stars</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );    

}
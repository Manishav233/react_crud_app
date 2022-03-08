import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
//User component is used to view the details of the individual user 
const User = () => {
  const [user, setUser] = useState({
    
    name: "",
    avatar: "",
    email: "",  
    phone: "",
    id: ""
  });
  
  //inorder to get individual data , we use unique id and collect it from link and access it using useParams()
  const { id } = useParams();
  
  //using useeffect to run once loadUser function by giving empty dependency
  useEffect(() => {
    loadUser();
  }, []);
  
  //loadUser is used to get the specific data using id and store it in user object.
  const loadUser = async () => {
    const res = await axios.get("https://6223a3133af069a0f9a70bdc.mockapi.io/users/"+id);
    setUser(res.data);
  };
  
  //display the stored data 
  return (

    <div className="container py-4" >

     <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <div className="Image">
      <img className='image' src={user.avatar} alt="Profile Photo"/>
      </div>
      <div className="details">
      <ul className="list-group w-50">
        <li className="list-group-item"><b>Name: </b> {user.name}</li>
        <li className="list-group-item"><b>Email: </b>{user.email}</li>
        <li className="list-group-item"><b>Phone Number: </b> {user.phone}</li>
 
      </ul>
     
      </div>
    </div>
  );
};

export default User;
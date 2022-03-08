import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';


function AddUser() {
    const navigate = useNavigate();
    //creating empty array and using it to store data when user adds the user
    const [user, setUser] = useState({
      name: "",
      avatar: "",
      email: "",  
      phone: "",
      id: ""
    });
  //destructing the data in user
    const { name,avatar, email, phone, id} = user;
    //code to update the user object with the data user enters
    const onInputChange = e => {
    console.log([e.target.name], e.target.value);
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  //post method to add the user
const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://6223a3133af069a0f9a70bdc.mockapi.io/users", user);
navigate("/");
  };


  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">ADD USER</h2>
      {/* creating a form */}
      <form onSubmit={e => onSubmit(e)}>
      <div className="form-group">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter Your Id"
            name="id"
            value={id}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your profile photo"
            name="avatar"
            value={avatar}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)}
          />
        </div>
      
        <button className="btn btn-primary btn-block">Add User</button>
      </form>
    </div>
  </div>
);
};

export default AddUser;

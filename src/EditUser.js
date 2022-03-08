import React from 'react';
import {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';


function EditUser() {
    const navigate = useNavigate();
    const {index}=useParams();
        //creating empty array and using it to store data when user edits the user
    const [user, setUser] = useState({
      name: "",
      avatar: "",
      email: "",  
      phone: "",
      id: ""
    });
    //destructing the data in user
    const { name,avatar, email, phone, id} = user;   
    
    //code to update the user object with the data user changes
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
//put method to update the user

const onSubmit = async e => {
    e.preventDefault();
    await axios.put("https://6223a3133af069a0f9a70bdc.mockapi.io/users/"+index, user);
navigate("/");
  };
  //using useEffect to run loadUsers method and get the data of specified user in the form before we update the data
  useEffect(()=>{
  loadUsers();
  },[]);
  
  const loadUsers=async ()=>{
  const result=  await axios.get("https://6223a3133af069a0f9a70bdc.mockapi.io/users/"+index);
  setUser(result.data);}

//creating a form to edit the data
  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">EDIT USER</h2>
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
      
        <button className="btn btn-primary btn-block">Edit User</button>
      </form>
    </div>
  </div>
);
};

export default EditUser;

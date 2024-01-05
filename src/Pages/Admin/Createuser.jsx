import React from "react";
import { useState } from "react";
const Createuser = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to store array of objects
  const [users, setUsers] = useState([]);

  // State to track password match status
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password === formData.confirmPassword) {
      // Create a new user object with the form data and a unique id
      const newUser = { ...formData, id: users.length + 1 };

      // Update the array of users
      setUsers([...users, newUser]);

      // Clear the form fields
      setFormData({
        id: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Reset password match status
      setPasswordsMatch(true);
    } else {
      // Set password match status to false
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="max-h-screen m-4 w-1/2 space-y-2 bg-green-50">
      <h1 className="font-Poppins text-2xl text-left ">Create User</h1>
      <form onSubmit={handleSubmit} className="px-3">
        <div className="px-3">
          <label
            htmlFor="Username"
            className="block  font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md outline-none"
            placeholder="John"
            required
          />
        </div>
        <div className="px-3">
          <label htmlFor="email" className="block font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md outline-none"
            placeholder="sample@example.com"
            required
          />
        </div>
        <div className="px-3">
          <label
            htmlFor="password"
            className="block  font-medium text-gray-600"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md outline-none"
            placeholder="****"
            required
          />
        </div>
        <div className="px-3">
          <label htmlFor="email" className="block font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md outline-none"
            placeholder="****"
            required
          />
        </div>
        {!passwordsMatch && <p>Password and Confirm Password do not match.</p>}
        <button className=" my-2 mx-4 px-6  py-2 bg-Green active:bg-green-600 text-white rounded-md ">
          Create
        </button>
      </form>
    </div>
  );
};

export default Createuser;

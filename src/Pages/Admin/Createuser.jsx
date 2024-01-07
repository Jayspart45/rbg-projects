import axios from "axios";
import { useState } from "react";
const Createuser = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "http://localhost:8000/user";
    try {
      const response = await axios.post(endpoint, {
        name: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen p-4 flex w-full justify-center items-center bg-green-50">
      <div className="lg:w-1/3 h-1/2 border border-Green p-6">
        <h1 className="font-Poppins text-2xl md:text-3xl text-center text-Green py-2">
          Create User
        </h1>
        <form onSubmit={handleSubmit} className="px-3 space-y-5 md:text-lg">
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
          <div className="flex justify-center">
            {/* {!passwordsMatch && <p>Password and Confirm Password do not match.</p>} */}
            <button className=" my-2 mx-4 px-6  py-2 bg-Green text-center  active:bg-green-600 text-white rounded-md ">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createuser;

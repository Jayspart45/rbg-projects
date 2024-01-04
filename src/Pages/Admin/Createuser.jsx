const Createuser = () => {
  return (
    <div className="max-h-screen m-4 w-1/2 space-y-2">
      <h1 className="font-Poppins text-2xl text-left ">Create User</h1>
      <form action="">
        <div className="px-3">
          <label
            htmlFor="Username"
            className="block  font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
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
            id="email"
            name="email"
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
            id="password"
            name="password"
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
            id="confirmpassword"
            name="confirm password"
            className="mt-1 p-2 w-full border rounded-md outline-none"
            placeholder="****"
            required
          />
        </div>
        <button className=" my-2 mx-4 px-6  py-2 bg-Green active:bg-green-600 text-white rounded-md ">
          Create
        </button>
      </form>
    </div>
  );
};

export default Createuser;

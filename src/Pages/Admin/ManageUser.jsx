import axios from "axios";
import { useEffect, useState } from "react";
import ls from "../Utility";

const ManageUser = () => {
  const [users, setUsers] = useState(ls.get("users") || []);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const get_users = async () => {
      try {
        let endpoint = "http://3.110.154.99:8004/users";
        const response = await axios.get(endpoint);
        // console.log(response)
        if (response.status == 200) {
          // console.log(response.data)
          ls.save("users", response.data);
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    get_users();
  }, []);

  return (
    <div className="w-full h-screen bg-green-50">
      <div className="h-fit w-full">
        <div className="flex justify-between max-md:flex-col items-center px-4 py-2">
          <div className="text-xl font-semibold">Manage Users</div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border border-solid border-Green border-opacity-40 rounded-lg px-4 py-1 outline-none"
            />
            {/* <button className="bg-Green text-white px-4 py-1 rounded-lg" onClick={find_users}>Search</button> */}
          </div>
        </div>
      </div>
      <div className="h-5/6">
        <ul className="p-4 max-h-full overflow-y-auto w-full">
          {
            users && users.length === 0 ? (
            <div className="text-center text-xl font-semibold">
              No Users Found
            </div>
          ) : (
            users &&
            users.map((user, index) => {
                if (user.name.includes(search)){
                    return (
                <li
                  key={index}
                  className="bg-white flex justify-between shadow-sm border border-solid border-Green border-opacity-40 text-xs h-12 items-center my-2 px-4 w-full rounded-lg"
                >
                  <span>{user.name}</span>
                  {/* <button className="bg-Green bg-opacity-80 text-white px-4 py-1 rounded-lg">
                    Edit
                  </button> */}
                </li>
              );
                }
              
            })
          )
          }
        </ul>
      </div>
    </div>
  );
};

export default ManageUser;

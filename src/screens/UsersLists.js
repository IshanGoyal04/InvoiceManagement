import React, { useEffect, useCallback, useState } from "react";

const UsersLists = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsersHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/getUsers");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedUsers = [];

      for (const key in data) {
        loadedUsers.push({
          id: key,
          name: data[key].name,
          department: data[key].department,
          designation: data[key].designation,
        });
      }

      setUsers(loadedUsers);
      console.log(loadedUsers);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsersHandler();
  }, [fetchUsersHandler]);

  return (
    <div className="items">
      <h1>Users List</h1>
      {users.map((val, key) => {
        return (
          <div>
            <h1>{val.name}</h1>
            <h2>{val.department}</h2>
            <h2>{val.designation}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UsersLists;

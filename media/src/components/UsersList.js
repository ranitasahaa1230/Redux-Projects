import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);

  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUsersError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap() //bcoz dispatch calls .then even if the promise fails, so wrap will give a brand new promise anf if the request is successful then .then else .catch
      // .then(()=>{
      //   console.log("suceess");
      //   // setIsLoadingUsers(false);
      // })
      .catch((err) => {
        console.log("error");
        setLoadingUsersError(err);
        // setIsLoadingUsers(false);
      })
      //after all then and catch finally will be called
      .finally(() => setIsLoadingUsers(false));
  }, []);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) return <div>Error fetching data...</div>;

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? "Creaing User..." :
        <Button onClick={handleUserAdd}>+ Add User</Button>}
        {creatingUsersError && "Error Creating User..."}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;

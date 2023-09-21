import User from "./User";
import Button from "./Button";
import FlexContainer from "./FlexContainer";
import loading from "../media/images/loading.gif";
import { faker } from "@faker-js/faker";
import classNames from "classnames";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store"; // action type
import { useThunk } from "../hooks/use-thunk";

const UsersList = ({ className }) => {
  const [isAddingUser, errorAddUser, updateAddUser] = useThunk(addUser);
  const [isLoading, error, updateFetchUsers] = useThunk(fetchUsers);
  const users = useSelector((state) => {
    return state.usersReducer.users;
  });
  const classes = classNames(
    "px-6 py-10 flex flex-col min-h-screen",
    className
  );
  useEffect(() => {
    updateFetchUsers();
  }, []);
  const updatedUsers = users.map((user) => {
    return <User key={user.id}>{user}</User>;
  });

  const handleAddUser = useCallback(() => {
    updateAddUser(faker.person.fullName());
  }, [updateAddUser]);

  const img = <img src={loading} alt="loading"></img>;
  const result = error ? "Error fetching data" : updatedUsers;
  const content = isLoading ? img : result;

  return (
    <div className={classes}>
      <FlexContainer className="border-b-2 border-gray mb-2 pl-2 pb-2 text-lg justify-between">
        <div>Users</div>
        {errorAddUser && "error adding user"}
        <Button loading={isAddingUser} onClick={handleAddUser}>
          Add User
        </Button>
      </FlexContainer>
      {content}
    </div>
  );
};

export default UsersList;

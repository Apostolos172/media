import User from "./User";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store"; // action type
import loading from "../media/images/loading.gif";
import Button from "./Button";
import FlexContainer from "./FlexContainer";
import { faker } from "@faker-js/faker";

const UsersList = ({ className }) => {
  // console.log("render count");
  const dispatch = useDispatch();
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [errorAddUser, setErrorAddUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { isLoading, users, error } = useSelector((state) => {
  const users = useSelector((state) => {
    // console.log(state);
    return state.usersReducer.users;
  });
  const classes = classNames(
    "px-6 py-10 flex flex-col min-h-screen",
    className
  );
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchUsers())
      .unwrap()
      .then()
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const updatedUsers = users.map((user) => {
    return <User key={user.id}>{user.name}</User>;
  });

  const handleAddUser = useCallback(() => {
    // console.log(typeof faker);
    setIsAddingUser(true);
    dispatch(addUser(faker.person.firstName()))
      .unwrap()
      .then()
      .catch((err) => {
        setErrorAddUser(err);
      })
      .finally(() => {
        setIsAddingUser(false);
      });
  }, [dispatch]);

  const img = <img src={loading} alt="loading"></img>;
  const result = error ? "Error fetching data" : updatedUsers;
  const content = isLoading ? img : result;

  // const resultAddUser = errorAddUser ? "Error adding data" : "done";
  // const contentAddUserButton = isAddingUser ? "adding..." : resultAddUser;
  // const classForButton = isAddingUser ? "opacity-30" : "";

  return (
    <div className={classes}>
      <FlexContainer className="border-b-2 border-gray mb-2 pl-2 pb-2 text-lg justify-between">
        <div>Users</div>
        {errorAddUser && "error adding user"}
        {/* {contentAddUserButton} */}
        <Button
          loading={isAddingUser}
          onClick={handleAddUser}
          // className={classForButton}
        >
          Add User
          {/* {isAddingUser ? "adding..." : "Add User"} */}
        </Button>
      </FlexContainer>
      {content}
      {/* {users.length} */}
      {/* <User>Tolis</User>
      <User>Other</User> */}
    </div>
  );
};

export default UsersList;

import { configureStore } from "@reduxjs/toolkit";
import { usersSliceReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUser } from "./thunks/addUser";
import { deleteUser } from "./thunks/deleteUser";

const store = configureStore({ reducer: { usersReducer: usersSliceReducer } });

export { store, fetchUsers, addUser, deleteUser };

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("user/add", async function (user) {
  const headers = { "content-type": "application/json" };
  const newUser = {
    name: user,
  };
  const response = await axios.post("http://localhost:3001/users", newUser, headers);
  //await pause(3000);

  // console.log(response);
  return response.data;
});

// // DEV ONLY!!!
// const pause = (duration) => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, duration);
//     });
//   };

export { addUser };

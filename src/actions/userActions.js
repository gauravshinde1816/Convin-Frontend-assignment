import { FETCH_USERS , FETCH_USER } from "./types";
import axios from "axios";
export const fetchUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users")
    .then((res) => {
      console.log("Action called");
      dispatch({
        type: FETCH_USERS,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log(err.message));
};


export const fetchUser = (id)=> (dispatch)=>{
    axios
    .get(`https://reqres.in/api/users/${id}`)
    .then((res) => {
      console.log("Action called");
      dispatch({
        type: FETCH_USER,
        payload: res.data.data,
      });
    })
    .catch((err) => console.log(err.message));
}
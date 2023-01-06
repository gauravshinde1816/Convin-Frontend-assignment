import React, { useEffect, useState } from "react";
import { fetchUsers , fetchUser } from "../actions/userActions";
import { connect } from "react-redux";

const Users = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);


  return (
    <div>
      {props.users.length > 0 &&
        props.users.map((user) => (
          <button key={user.id} onClick={()=>props.fetchUser(user.id)} className="btn btn-outline-primary m-3 btn-lg"> {user.id}</button>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.items,
});

export default connect(mapStateToProps, { fetchUsers , fetchUser })(Users);

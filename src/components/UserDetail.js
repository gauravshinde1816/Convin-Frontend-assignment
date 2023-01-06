import React from "react";
import { connect } from "react-redux";

const UserDetail = (props) => {
  return (
    <div>
      {props.user && (
        <div className="card" style={{width:"18rem"}}>
          <img
            className="card-img-top"
            src={props.user.avatar}
            alt="Card image cap"
          />
          <div className="card-body">
            <h2>
              <b>First Name</b> : {props.user.first_name}
            </h2>
            <h2>
              <b>Last Name</b> : {props.user.last_name}
            </h2>
            <h2>
              <b>Email</b> : {props.user.email}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users.item,
});

export default connect(mapStateToProps, {})(UserDetail);

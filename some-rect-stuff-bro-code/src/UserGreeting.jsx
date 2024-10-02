/** @format */

import React from "react";
import propTypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.userName}</h2>;
  //   }
  //   return <h2>Please loggedIn to Continue</h2>;
  // ==========================================================>

  // We can also use ternary Operator
  const welcomeMessage = (
    <h2 className='welcome-message'>Welcome {props.userName}</h2>
  );
  const loginPrompt = (
    <h2 className='login-prompt'>Please Log In to Continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: propTypes.bool,
  userName: propTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};
export default UserGreeting;

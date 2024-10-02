/** @format */

import React from "react";
import propTypes from "prop-types";

function Students(props) {
  return (
    <div className='Student'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
// We can use propTypes for debugging
Students.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Students.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Students;

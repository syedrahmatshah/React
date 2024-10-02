/** @format */
import React from "react";
import Property from "./Property";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className='propertyList'>
      {properties.map((p) => {
        return (
          <Property
            key={p.id}
            {...p}
          />
        );
      })}
    </div>
  );
}

export default PropertyList;

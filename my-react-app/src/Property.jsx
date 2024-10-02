/** @format */
import propTypes from "prop-types";

function Property({ id, name, rating, price }) {
  return (
    <div className='property'>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h2>{rating} a night</h2>
      <h3>{price} ⭐</h3>
    </div>
  );
}

Property.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  rating: propTypes.number,
  price: propTypes.number,
};
export default Property;

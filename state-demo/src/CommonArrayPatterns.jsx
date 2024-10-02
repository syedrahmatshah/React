/** @format */

export default function () {
  const shoppingCart = [
    { id: 1, product: "HDMI CABLE", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 },
  ];

  //ADDING TO AN ARRAY
  const newArr = [
    ...shoppingCart,
    { id: 4, product: "Coffe Mug", price: 7.99 },
  ];

  // REMOVING AN ELEMENT
  const removeArr = shoppingCart.filter((item) => item.id !== 0);

  // UPDATING AN ELEMENT
  const updtArr = shoppingCart.map((item) => {
    return {
      ...item,
      product: item.product.toLowerCase(),
    };
  });

  // MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
  const modfArr = shoppingCart.map((item) => {
    if (item.id === 3) {
      return { ...item, price: 19.2 };
    } else {
      return item;
    }
  });
  return (
    <div>
      {console.log("Add a new array")}
      {console.log(newArr)}

      {console.log("Remove an array")}
      {console.log(removeArr)}

      {console.log("Update an array")}
      {console.log(updtArr)}

      {console.log("Modify an elment in array")}
      {console.log(modfArr)}
    </div>
  );
}

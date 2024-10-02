/** @format */
import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.map((i) => (
          <ShoppingListItem
            key={i.id}
            item={i.item}
            quantity={i.quantity}
            completed={i.completed}

            // we also used spread operator
            // key={i.id}
            // {...i}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// const data = [
//     { id: 1, item: "eggs", quantity: 12, completed: false },
//     { id: 2, item: "milk", quantity: 1, completed: true },
//     { id: 3, item: "chicken breast", quantity: 4, completed: false },
//     { id: 4, item: "carrots", quantity: 6, completed: true },
//   ];

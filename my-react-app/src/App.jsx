/** @format */

import Die from "./Die";
import DobuleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ListPicker from "./ListPicker";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";
import ColorBoxGrid from "./ColorBoxGrid";

// const data = [
//   { id: 1, item: "eggs", quantity: 12, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "chicken breast", quantity: 4, completed: false },
//   { id: 4, item: "carrots", quantity: 6, completed: true },
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4f",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/* <ToggleCounter /> */}
      {/* <Toggler /> */}
      {/* <Counter /> */}
      {/* <Clicker
        message='Hi!!!'
        buttonText='Please Click Me'
      />
      <Clicker
        message='Please Stop Clicking Me!!!'
        buttonText='Do Not Click'
      /> */}
      {/* <Form /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Greeter
        person='Bill'
        from='Colt'
      />
      <Greeter
        person='Ted'
        from='Etol'
      />
      <Greeter
        person='Rosa'
        from='Colt'
      />

      <Die numSide={20} />
      <Die numSide={20} />
      <Die />

      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c", "d"]} />

      <Heading
        color='magenta'
        text='Welcome!'
        fontSize='20px'
      />
      <Heading
        color='teal'
        text='Blah!'
        fontSize='48px'
      />

      <DobuleDice />
      <DobuleDice />

      <ColorList colors={["red", "purple", "pink", "teal"]} />
      <ColorList colors={["olive", "orangered", "slategray"]} /> */}
    </div>
  );
}

export default App;

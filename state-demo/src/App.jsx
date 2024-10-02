/** @format */

import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper from "./ScoreKeeper";
import CommonArryPatterns from "./CommonArrayPatterns";
import LuckyN from "./component/LuckyN";
import { sum } from "./component/utils";
import BoxGrid from "./box-component/BoxGrid";
import UsernameForm from "./form-component/UsernameForm";
import SignUpForm from "./form-component/SignUpForm";
import BetterSignUpForm from "./form-component/BetterSignUpForm";
import ShoppingList from "./form-component/ShoppingList";
import UseCounter from "./UseCounter";
import QuoteFetcher from "./QuoteFetcher";
import QuoteFetcherLoader from "./QuoteFetcherLoader";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}
function App() {
  return (
    <>
      <QuoteFetcherLoader />
      {/* <QuoteFetcher /> */}
      {/* <UseCounter /> */}
      {/* <ShoppingList /> */}
      {/* <BetterSignUpForm /> */}
      {/* <SignUpForm /> */}
      {/* <UsernameForm /> */}
      {/* <BoxGrid /> */}
      {/* <LuckyN
        numDice='2'
        winCheck={lessThan4}
        title='Roll less than 4:('
      />
      <LuckyN
        numDice='2'
        winCheck={allSameValue}
        title='Roll the same number:( '
      /> */}
      {/* <CommonArryPatterns /> */}
      {/* <EmojiClicker /> */}
      {/* <ScoreKeeper
        numPlayers={5}
        target={10}
      /> */}
      {/* <Dumbo /> */}
      {/* <Counter /> */}
    </>
  );
}
export default App;

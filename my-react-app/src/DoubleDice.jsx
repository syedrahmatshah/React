/** @format */

// This is the first method
// export default function DobuleDice(params) {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;

//     if (num1 === num2) {
//       return (
//         <div>
//           <h1>You Win:</h1>
//           <p>Num1:{num1}</p>
//           <p>Num2:{num2}</p>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h1>You Win:</h1>
//         <p>Num1:{num1}</p>
//         <p>Num2:{num2}</p>
//       </div>
//     );
//   }

// This is the second method
// export default function DobuleDice(params) {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   const result = num1 === num2 ? "You Win:(" : "You Lose:(";

//   return (
//     <div>
//       <h1>{result}</h1>
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//     </div>
//   );
// }

// This is the third method
// export default function DobuleDice(params) {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <div>
//       <h1>{num1 === num2 ? "You Win:(" : "You Lose:("}</h1>
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//     </div>
//   );
// }

// This is the fourth approach
// export default function DobuleDice(params) {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <div>
//       <h1>DoubleDice</h1>
//       {num1 === num2 ? <h2>You Win:(</h2> : null}
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//     </div>
//   );
// }

// // This is the fifth approach
// export default function DobuleDice(params) {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   const isWinner = num1 === num2;
//   const styles = { color: isWinner ? "green" : "red" };

//   return (
//     <div
//       className='DoubleDice'
//       style={styles}>
//       <h1>DoubleDice</h1>
//       {isWinner && <h2>You Win!</h2>}
//       <p>Num1:{num1}</p>
//       <p>Num2:{num2}</p>
//     </div>
//   );
// }

// Let's make a small app using method five

// // This is the fifth approach
export default function DobuleDice(params) {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const num3 = Math.floor(Math.random() * 3) + 1;

  const isWinner = num1 === num2;
  const styles = { color: isWinner ? "green" : "red" };

  return (
    <div className='DoubleDice'>
      <h1>DoubleDice</h1>

      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You Win!" : "You Lose"}
      </h2>
      <h2>{isWinner && <h3>congrats!!!</h3>}</h2>
      <p>Num1:{num1}</p>
      <p>Num2:{num2}</p>
      <p>Num3:{num3}</p>
    </div>
  );
}

/** @format */

export default function Die({ numSide = 6 }) {
  const roll = Math.floor(Math.random() * numSide) + 1;
  return (
    <p>
      {numSide} - Die Roll: {roll}
    </p>
  );
}

/** @format */

export default function ListPicker({ values }) {
  const ranIndex = Math.floor(Math.random() * values.length);
  const randElement = values[ranIndex];
  return (
    <div>
      <p>The List of Values:{values}</p>
      <p>Random element is :{randElement}</p>
    </div>
  );
}

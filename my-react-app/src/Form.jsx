/** @format */

function handleSubmit(event) {
  event.preventDefault();
  console.log("Submit The Form");
}

function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <button>Submit!</button>
    </form>
  );
}

export default Form;

import "./registration.css";

function Registration({ content }) {
  return (
    <form className="formPage">
      <label>Name:
        <input type="text" />
      </label>
      <label>Age:
        <input type="text" />
      </label>
    </form>
)
}
export default Registration;

/** let custom components start with a capital letter */
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1> My todos</h1>
      <Todo text="Learn React" />
      <Todo text="Created arialnaut.com" />
      <Todo text="Make it better than wix" />
    </div>
  );
}

export default App;

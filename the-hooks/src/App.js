import "./App.css";
import DataFetching from "./components/Hooks/DataFetching";

function App({ login }) {
  const { loading, data, error } = DataFetching(
    `https://api.github.com/users/${login}`
  );
  if (loading) return <h1>loading..............</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="App">
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}

export default App;

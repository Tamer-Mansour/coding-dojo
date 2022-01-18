import "./App.css";
import UserContext from "./context/UserContext";
import AppWrapperComponent from "./AppWrapperComponent";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"context value"}>
        <AppWrapperComponent></AppWrapperComponent>
      </UserContext.Provider>
    </div>
  );
}

export default App;

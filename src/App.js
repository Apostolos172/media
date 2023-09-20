import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App flex flex-col">
      <header className="App-header border-black border-solid border-b-4 bg-gray py-6 px-2 shadow-2xl text-center text-5xl">
        Gallery
      </header>
      <UsersList></UsersList>
    </div>
  );
}

export default App;

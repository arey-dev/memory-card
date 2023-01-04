import "./styles/App.css";
import { Header } from "./Header";
import { GameBoard } from "./GameBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <GameBoard />
      </main>
    </>
  );
}

export default App;

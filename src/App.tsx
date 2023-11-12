import "./App.css";
import Questions from "./components/Question";

function App() {
  return (
    <>
      <div className="min-h-screen relative">
        <h1 className="text-center mb-20 text-amber-700 uppercase text-xl">Lat Htauk BayDin (Min Thein Kha)</h1>
        <div className="md:container">
          <Questions/>
        </div>
        <p>© 2023 BayDin by Lemon</p>
      </div>
    </>
  );
}

export default App;
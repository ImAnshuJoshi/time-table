import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import PlanningBar from "./Components/PlanningBar/PlanningBar";
import PeriodNav from "./Components/PeriodNavbar/PeriodNav";
import Table from "./Components/Table/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlanningBar />
      <PeriodNav />
      <Table />
    </div>
  );
}

export default App;

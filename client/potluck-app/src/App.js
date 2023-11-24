import {Home} from "./pages/home"
import {Guests} from "./pages/guests"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddDish } from "./pages/addDish";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/addDish" element={<AddDish />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

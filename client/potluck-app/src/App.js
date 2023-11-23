import {Home} from "./pages/home"
import {Guests} from "./pages/guests"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guests" element={<Guests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

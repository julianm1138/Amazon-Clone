import "./App.css";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );

  // Footer.jsx
}

export default App;

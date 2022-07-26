import "./App.css";

import Chat from "./Components/Chat";
import Login from "./Components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/chat" exact element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

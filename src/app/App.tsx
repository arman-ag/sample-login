import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from 'views/Auth';
import Home from 'views/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
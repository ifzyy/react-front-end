import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from './pages/Greeting';

const App = () => (
  <>
    <h2>Greeting App </h2>
    <Link to="/greeting">Go to greeting page</Link>
    <Routes>
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </>
);

export default App;

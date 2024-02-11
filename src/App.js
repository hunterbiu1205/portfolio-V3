import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import NotFound from './pages/NotFound'; // Create a NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-V3" element={<Home />} />
        <Route path="/portfolio-V3/archive" element={<Archive />} />
        {/* Catch-all route for any unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
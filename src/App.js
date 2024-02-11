import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/portfolio-V3" element={<Home />} />
        <Route path="/portfolio-V3/archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;

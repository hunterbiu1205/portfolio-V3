import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

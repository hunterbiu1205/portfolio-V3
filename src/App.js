import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import NotFound from './pages/NotFound'; // Create a NotFound component

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/portfolio-V3" element={<Home />} />
        <Route path="/portfolio-V3/archive" element={<Archive />} />
           {/* default redirect to home page */}
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
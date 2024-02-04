import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-V3" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

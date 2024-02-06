import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Archive from './pages/Archive/Archive';
import ScrollToTop from './pages/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
   
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

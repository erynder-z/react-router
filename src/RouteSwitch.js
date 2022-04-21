import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import Home from './Home';
import About from './About';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

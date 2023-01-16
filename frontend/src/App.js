import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import CreateCar from './pages/CreateCar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login/>} />
      <Route path="addCar" element={<CreateCar/>} />
    </Routes>
  );
}

export default App;

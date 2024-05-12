import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex',background:"#1441A5" }}>
        <Sidebar />
        <Routes>
          <Route path="/"  element={<Dashboard/>} />
          <Route path="/home"  element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero, Dashboard } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

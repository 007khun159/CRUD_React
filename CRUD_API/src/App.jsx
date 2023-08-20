import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar  from './components/nav'
import Users from './pages/users'
import CreateUser from './pages/createuser'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="create" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar  from './components/nav'
import Users from './pages/users'
import CreateUser from './pages/createuser'
import UserUpdate from './pages/updateuser';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="update/:id" element={<UserUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
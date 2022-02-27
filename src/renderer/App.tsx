import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import AccountForm from './AccountForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AccountForm />} />
      </Routes>
    </Router>
  );
}

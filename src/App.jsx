import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegistrationPage'; // Ensure this file exists and is named correctly
import CookieBanner from './components/CookieBanner'; // Import the CookieBanner component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Ensure the component matches the file name */}
        <Route path="/shopping" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <CookieBanner /> {/* Add the CookieBanner component here */}
    </Router>
  );
};

export default App;

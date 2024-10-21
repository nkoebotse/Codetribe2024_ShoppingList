import { useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (username && password) {
      try {
        // Create a new user
        const newUser = { username, password };
        await axios.post(`http://localhost:5000/users`, newUser);
        
        alert('Registration successful! You can now log in.');
        navigate('/login');
      } catch (error) {
        alert('Error during registration. Please try again.');
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="container-a">
      <h2 className="container-b">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="container-a"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="container-a"
        />
        <button type="submit" className=".item_login">Register</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default RegistrationPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password); 
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <button className="btn btn-primary" onClick={toggleLoginModal}>Login</button>
          <Link to="/demo">
            <button className="btn btn-secondary ml-2">Check the Context in action</button>
          </Link>
        </div>
      </div>

      {/* Modal de Login */}
      {showLogin && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputContainer}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.inputContainer}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>Login</button>
              <button type="button" onClick={toggleLoginModal} style={styles.closeButton}>Close</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};
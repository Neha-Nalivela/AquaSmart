import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to AQUASMART</h1>
        <p>Your smart irrigation and water management solution.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn btn-success">Get Started</Link>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Real-Time Monitoring</h3>
            <p>Track soil moisture, temperature, and humidity with live updates.</p>
          </div>
          <div className="feature-card">
            <h3>Automated Irrigation</h3>
            <p>Smart irrigation system that waters crops based on real-time conditions.</p>
          </div>
          <div className="feature-card">
            <h3>Weather Forecast</h3>
            <p>Integrates weather data to optimize water usage.</p>
          </div>
          <div className="feature-card">
            <h3>Crop Recommendations</h3>
            <p>Suggests the best crops based on soil and temperature data.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>1. Connect sensors to your farm.</p>
        <p>2. Monitor data on the AQUASMART dashboard.</p>
        <p>3. Get recommendations for water usage and crops.</p>
        <p>4. Automate irrigation based on real-time insights.</p>
      </section>
    </div>
  );
};

export default Home;

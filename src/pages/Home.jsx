import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>MarouaGlow vous souhaite la Bienvenue</h1>
      <p style={styles.subtitle}>
        Cliquez sur a propos
      </p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #fff5f9 0%, #fff 100%)'
  },
  title: {
    fontSize: '2.5rem',
    color: '#ff6b8b',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
    maxWidth: '500px'
  }
};

export default Home;
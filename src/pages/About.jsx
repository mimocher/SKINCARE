import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>À propos de nous</h1>

      <p style={styles.text}>
        <strong>Maroua Glow</strong> est votre destination en ligne dédiée aux soins de la peau.
        Nous sélectionnons des produits fiables et efficaces pour répondre aux besoins
        de tous les types de peau.
      </p>

      <p style={styles.text}>
        Notre objectif est de vous offrir une expérience simple, des produits de qualité
        et des prix accessibles, afin que chacun puisse prendre soin de sa peau
        en toute confiance.
      </p>

      <p style={styles.text}>
        🎀 Qualité – Simplicité – Confiance
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    textAlign: 'center'
  },
  title: {
    marginBottom: '1.5rem',
    color: '#222'
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    marginBottom: '1rem',
    color: '#555'
  }
};

export default About;

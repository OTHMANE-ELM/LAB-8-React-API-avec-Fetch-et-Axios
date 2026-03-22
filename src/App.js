import React from 'react';
import FetchData from './FetchData';
import AxiosData from './AxiosData';
import './App.css'; // Ajout du style pour notre thème bleu

/**
 * Composant principal (App) :
 * Il agit comme le squelette principal de notre interface utilisateur.
 * Contient le titre principal et affiche nos deux méthodes de consommation d'API.
 */
function App() {
  return (
    <div className="app-container">
      {/* En-tête avec notre design bleu */}
      <header className="app-header">
        <h1>Mon Espace React : Découverte des APIs</h1>
        <p>Une interface personnalisée avec un design moderne et exclusif</p>
      </header>
      
      {/* Section principale contenant nos cartes de données */}
      <main className="content-container">
        <FetchData />
        <AxiosData />
      </main>
    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Composant AxiosData :
 * Ce composant s'appuie sur la très populaire librairie Axios pour requêter
 * de manière élégante et concise un annuaire de profils utilisateurs.
 */
function AxiosData() {
    // Initialisation des états du composant (liste membres, chargement, exception)
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lancement de l'appel asynchrone via Axios au démarrage
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            // Accès fluide aux données via la propriété de facilitation response.data
            .then((response) => setUsers(response.data))
            // Interception simple des erreurs liées au réseau
            .catch((err) => setError(err.message))
            // Nettoyage de l'indicateur d'activité réseau
            .finally(() => setLoading(false));
    }, []);

    // Phase intermédiaire et active : chargement en arrière-plan
    if (loading) {
        return (
            <div className="card loading">
                <p>⏳ Identification des membres du réseau...</p>
            </div>
        );
    }

    // Phase fatale : anomalie lors de la connexion HTTP
    if (error) {
        return (
            <div className="card error">
                <p>❌ Échec lors de la communication serveur : {error}</p>
            </div>
        );
    }

    // Rendu officiel en liste des profils avec avatars personnalisés
    return (
        <div className="card axios-card">
            <h2>Annuaire des Membres 👥</h2>
            <p className="subtitle">Requête simplifiée propulsée par Axios</p>
            <ul className="item-list user-list">
                {users.map((user) => (
                    <li key={user.id} className="item user-item">
                        {/* Création d'un petit avatar circulaire fait avec la 1ere lettre */}
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <div className="user-details">
                            <span className="user-name">{user.name}</span>
                            <span className="user-email">{user.email.toLowerCase()}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AxiosData;
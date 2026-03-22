import { useState, useEffect } from 'react';

/**
 * Composant FetchData :
 * Ce module exploite la méthode native fetch() de JavaScript
 * pour obtenir et afficher une liste de publications.
 */
function FetchData() {
    // Déclaration des états locaux pour gérer les données et les statuts
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Déclenchement de la requête réseau au moment du montage (chargement de la page)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // Vérification stricte de la qualité de la réponse serveur
                if (!response.ok) {
                    throw new Error('Problème de connexion avec le serveur distant 🌐');
                }
                return response.json();
            })
            // Sauvegarde des données reçues en succès
            .then((data) => setPosts(data))
            // Capture et mémorisation du message d'erreur en cas d'échec
            .catch((err) => setError(err.message))
            // Fin obligatoire de la période de chargement, peu importe l'issue
            .finally(() => setLoading(false));
    }, []);

    // Affichage lors du délai d'attente réseau
    if (loading) {
        return (
            <div className="card loading">
                <p>⏳ Récupération de vos publications en cours...</p>
            </div>
        );
    }
    
    // Affichage des erreurs éventuelles avec une alerte rouge
    if (error) {
        return (
            <div className="card error">
                <p>❌ Un petit souci est survenu : {error}</p>
            </div>
        );
    }

    // Affichage final du succès avec les données
    return (
        <div className="card">
            <h2>Mes Publications Récentes 📝</h2>
            <p className="subtitle">Extrait via la fonction native robuste fetch()</p>
            <ul className="item-list">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id} className="item">
                        {/* Numérotation visuelle personnalisée */}
                        <span className="item-id">#{post.id}</span>
                        <span className="item-title">{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;
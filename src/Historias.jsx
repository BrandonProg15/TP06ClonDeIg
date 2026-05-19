import { useState, useEffect } from 'react';
import axios from 'axios';
import './Historias.css';

function Historias() {

    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);

        axios
            .get('https://api.thecatapi.com/v1/images/search?limit=15')
            .then((response) => {
                setPublicaciones(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });

    }, []);

    return (
        <div className="stories-container">
            <h2 className="stories-title">Stories</h2>
            {loading && <p>Buscando resultados...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="stories-wrapper">
                {publicaciones.map((post, index) => (
                    <div className="story" key={post.id}>
                        <div className="story-border">
                            <img
                                src={post.url}
                                alt="story"
                            />
                        </div>
                        <span>gatito_{index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Historias;
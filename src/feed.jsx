import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import { useNavigate } from 'react-router-dom'

function Feed() {
    const navigate = useNavigate();
    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = 'live_zQKcnB78r9h1dcWGnreA1sdCyUiUdCw5lFcOSeyhaV5WLyaZxHzm4WQZeZ5pRrJH';

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_zQKcnB78r9h1dcWGnreA1sdCyUiUdCw5lFcOSeyhaV5WLyaZxHzm4WQZeZ5pRrJH`)
            .then((response) => {
                setPublicaciones(response.data);
                setError(null);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <button className="boton-usuario" onClick={() => navigate('/usuario')}>usuario</button>
            <h2>Feed</h2>
            {loading && <p>Buscando resultados...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {publicaciones.map((post) => (
                <button
                    key={post.id}
                    onClick={() =>
                        navigate(`/postcard/${post.id}`, {
                            state: { url: post.url }
                        })
                    }
                >
                    <img
                        src={post.url}
                        alt="gato"
                        style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                    />
                </button>
            ))}
        </div>

    );
}

export default Feed;

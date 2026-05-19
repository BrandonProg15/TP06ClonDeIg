import { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css'
import { useNavigate } from 'react-router-dom'
import Historias from './Historias';
import UsuarioInfo from './usuarioInfo';

function Feed() {
    const navigate = useNavigate();
    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
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
        <div className="feed-container">
            <div className="historias"> <Historias /></div>
            <div className="usuarioInfo">
                <UsuarioInfo />
            </div>
            {loading && <p className="loading">Buscando resultados...</p>}
            {error && <p className="error">{error}</p>}

            <div className="feed-grid">
                {publicaciones.map((post) => (
                    <button
                        key={post.id}
                        className="feed-post"
                        onClick={() =>
                            navigate(`/postcard/${post.id}`, { state: { url: post.url } })
                        }
                    >
                        <img
                            src={post.url}
                            alt="gato"
                        />
                    </button>
                ))}
            </div>


        </div>
    );
}

export default Feed;

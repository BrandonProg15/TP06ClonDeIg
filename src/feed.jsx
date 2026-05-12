import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';

function Feed() {

    const navigate = useNavigate();

    const [publicaciones, setPublicaciones] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
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
        <div className="feed-root">

            <div className="feed-header">
                <h2>STORIES</h2>
                <div className="stories">
                    {publicaciones.slice(0, 8).map((s, i) => (
                        <button key={i} className="story">
                            <img src={s.url} alt={`story-${i}`} />
                            <div className="story-name">@user_name</div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="section-title">TRENDING</div>

            {loading && <p>Buscando resultados...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="trending-grid">
                {publicaciones.map((post) => (
                    <button
                        key={post.id}
                        className="trending-item"
                        onClick={() =>
                            navigate('/postcard', {
                                state: { url: post.url }
                            })
                        }
                    >
                        <img src={post.url} alt="gato" />
                        <div className="item-meta">
                            <img src="https://i.pravatar.cc/24" alt="mini-avatar" />
                            <div className="icons">♡ ✉️ ✈️</div>
                        </div>
                    </button>
                ))}
            </div>

        </div>
    );
}

export default Feed;
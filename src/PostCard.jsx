import './index.css'
import { useLocation } from 'react-router-dom';

function PostCard() {

    const location = useLocation();
    const url = location.state?.url;

    const comentarios = [
        { usuario: 'michi_lover', texto: 'qué lindo!! 😍' },
        { usuario: 'gatito_fan', texto: 'me encanta 🐱' },
        { usuario: 'cat.world', texto: 'hermoso gatito' },
    ];

    return (
        <div className="post-card">
            <div className="post-header">
                <img src="https://i.pravatar.cc/40" alt="avatar" />
                <span>usuario</span>
            </div>

            <img src={url} alt="gato" style={{ transform: 'rotate(-3deg)' }} />

            <div className="post-info">
                <p>100 likes</p>
            </div>

            <div className="post-comentarios">
                {comentarios.map((c, index) => (
                    <p key={index}>
                        <strong>{c.usuario}</strong> {c.texto}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default PostCard;
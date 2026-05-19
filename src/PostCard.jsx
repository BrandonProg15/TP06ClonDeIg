import './PostCard.css'
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

function PostCard() {

    const { id } = useParams();
    const location = useLocation();
    const url = location.state?.url;

    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem("MisLikes");
        if(storedLikes){
            return JSON.parse(storedLikes)
        }else{
            return [];
        }
    });

    const comentarios = [
        { usuario: 'michi_lover', texto: 'qué lindo!! 😍' },
        { usuario: 'gatito_fan', texto: 'me encanta 🐱' },
        { usuario: 'cat.world', texto: 'hermoso gatito' },
    ];

    const tieneLike = likes.includes(id);

    function añadirLikes(id) {

        let nuevosLikes;

        if (likes.includes(id)) {
            nuevosLikes = likes.filter(likeId => likeId !== id);
        } else {
            nuevosLikes = [...likes, id];
        }

        setLikes(nuevosLikes);

        localStorage.setItem(
            "MisLikes",
            JSON.stringify(nuevosLikes)
        );
    }

    return (
        <div className="post-card">

            <div className="post-header">
                <img src="https://i.pravatar.cc/40" alt="avatar" />
                <span>usuario</span>
            </div>

            <img
                src={url}
                alt="gato"
                style={{ transform: 'rotate(-3deg)' }}
            />

            <div className="post-info">
                <p>{likes.length} likes</p>
            </div>

            <button onClick={() => añadirLikes(id)}>
                {tieneLike ? "❤️" : "🤍"}
            </button>

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
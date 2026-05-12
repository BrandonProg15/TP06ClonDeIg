import { useState } from 'react';
import axios from 'axios';
import './index.css'

function PostCard({ id, imagen, usuario, likes, descripcion, fecha }) {
    const [likeCount, setLikeCount] = useState(likes);

    return (
        <div className="post-card">
            <div className="post-header">
                <img src="https://i.pravatar.cc/40" alt="avatar" />
                <span>{usuario}</span>
            </div>
            <img src={imagen} alt="gato" style={{ transform: 'rotate(-3deg)' }}/>
            {/* botones de interacción */}
            {/* likes, descripcion, fecha */}
        </div>
    );
}

export default PostCard;
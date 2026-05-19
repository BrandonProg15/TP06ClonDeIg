import './UsuarioInfo.css';
import { useNavigate } from 'react-router-dom'

function UsuarioInfo() {
    const navigate = useNavigate();
    const usuario = {
        nombre: 'michi_lover',
        foto: 'https://i.pravatar.cc/150',
        likes: 1000,
        seguidores: 340,
        posts: [
            'https://cdn2.thecatapi.com/images/2k3.png',
            'https://cdn2.thecatapi.com/images/i5.jpg',
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
        ]
    };
    return (
        <div className="perfil">
            <div className="perfilHeader">
                <button className="botonPerfil" onClick={() => navigate('/usuario')}>
                    <img src={usuario.foto} alt="perfil" className="perfilFoto" />
                </button>
                <div>
                    <h2>{usuario.nombre}</h2>
                </div>
            </div>

            {/* ESTADÍSTICAS */}
            <div className="perfilStats">
                <p><strong>{usuario.likes}</strong> 🤍</p>
                <p><strong>{usuario.seguidores}</strong> followers</p>
            </div>

            <div className="botonesRaros">
                <button className="botonHome">
                    Home
                </button>
                <button className="botonExplore">
                    Explore
                </button>
                <button className="botonReels">
                    Reels
                </button>
                <button className="botonIGTV">
                    IGTV
                </button>
                <button className="botonNotification">
                    Notification
                </button>
            </div>
        </div>
    );
}

export default UsuarioInfo;
import './index.css'

function Usuario() {
    const usuario = {
        nombre: 'michi_lover',
        bio: 'Amante de los gatitos 🐱 y el café ☕',
        foto: 'https://i.pravatar.cc/150',
        publicaciones: 12,
        seguidores: 340,
        seguidos: 180,
        posts: [
            'https://cdn2.thecatapi.com/images/2k3.png',
            'https://cdn2.thecatapi.com/images/i5.jpg',
            'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
        ]
    }

    return (
        <div className="perfil">

            <div className="perfil-header">
                <img src={usuario.foto} alt="perfil" className="perfil-foto" />
                <div>
                    <h2>{usuario.nombre}</h2>
                    <p>{usuario.bio}</p>
                </div>
                <button>Editar perfil</button>
            </div>

            <div className="perfil-stats">
                <p><strong>{usuario.publicaciones}</strong> publicaciones</p>
                <p><strong>{usuario.seguidores}</strong> seguidores</p>
                <p><strong>{usuario.seguidos}</strong> seguidos</p>
            </div>

            <div className="perfil-posts">
                {usuario.posts.map((img, index) => (
                    <img key={index} src={img} alt="post" />
                ))}
            </div>

        </div>
    )
}

export default Usuario
Dentro del README deberán explicar:
- Cómo organizaron el proyecto.

Usamos como base el tp anterior de peliculas, inspirandonos de su sintaxis para poder acordarnos de la sintaxis y sus funciones con algunos cambios y una vez que tuvimos las funciones del proyecto funcionando comenzamos a crear y conectar todos los css. De todas formas, no negamos que pedimos un poco de ayuda a la IA, para por ejemplo, como hacer que la api solo nos diera 10 imagenes y como hacer para que se envie correctamente una informacion específica a otra view.  

- Qué componentes crearon.
  
App.jsx/css, feed.jsx/css, Header.jsx/css, PostCard.jsx/css, usuario.jsx/css, historias.jsx/css, Main.jsx y UsuariosInfo.jsx/css

- Qué responsabilidad tiene cada componente.
  
  main.jsx: Inicia la aplicación React y configura las rutas con BrowserRouter.
  Usuario.jsx: Muestra el perfil completo del usuario con foto, bio y publicaciones.
  Feed.jsx: Obtiene publicaciones desde la API y muestra el feed principal de imágenes.
  UsuarioInfo.jsx: Enseña un resumen del usuario y botones de navegación lateral.
  PostCard.jsx: Muestra un post individual y permite dar o quitar likes.
  Historias.jsx: Obtiene y muestra historias horizontales estilo Instagram.
  Header.jsx: Muestra la barra superior con el nombre de la app y el buscador.
  App.jsx: Organiza la aplicación y define las rutas entre las distintas páginas.
- Por qué decidieron componentizar de esa manera.
  
  Para separar la aplicación en partes pequeñas y organizadas, donde cada componente tiene una función específica. Esto hace que el código sea más fácil de leer, mantener, reutilizar y modificar un componente sin afectar    a los demás.
  
- Cómo se comunican los componentes mediante props.

Los componentes se comunican mediante props cuando un componente padre le envía información o funciones a un componente hijo. La estructura principal parte desde App, que renderiza componentes como Header, Feed y Usuario. Aunque varios componentes no reciben props directamente, la aplicación mantiene una comunicación entre componentes utilizando React Router para pasar información entre vistas. Por ejemplo, desde Feed se envía el id y la url de una publicación al componente PostCard mediante navigate, y luego PostCard recupera esos datos usando useParams y useLocation. Esto permite que cada componente reciba únicamente la información necesaria para funcionar y mantiene el código más organizado y reutilizable

- Qué hooks utilizaron y para qué.
  
Utilizamos useState para guardar y actualizar datos dinámicos como publicaciones, likes, errores y estados de carga, usamos useEffect para ejecutar las peticiones a la API cuando los componentes se renderizan y tambien usamos React Router como useNavigate para cambiar de página, useParams para obtener parámetros de la URL y useLocation para recibir información enviada entre rutas.
  
- Qué diseño de Figma utilizaron como referencia.

  https://www.figma.com/es-es/comunidad/file/1004033523744290376/instagram-modern-web-design

- Cómo resolvieron la visualización individual de publicaciones.

La visualización individual de publicaciones se resolvió utilizando React Router. Desde el componente Feed, cada publicación se muestra como un botón que, al hacer click, redirige al usuario a una ruta específica usando navigate para que el componente PostCard reciba esos datos mediante useParams y useLocation, lo que permite renderizar una vista individual de la publicación elegida. Dentro de esa pantalla se muestran la imagen, los likes y los comentarios simulados, logrando una experiencia similar a la de una publicación real de Instagram.

-  Cómo simularon el perfil de usuario logueado.

 El perfil del usuario logueado se simuló creando un objeto llamado usuario dentro de componentes como Usuario.jsx y UsuarioInfo.jsx. En ese objeto se guardaron datos como el nombre (michi_lover), la foto de perfil, los seguidores, los likes y las publicaciones. Después, esos datos se muestran en pantalla usando expresiones como {usuario.nombre} o src={usuario.foto}. Así lograron que la aplicación funcione como si hubiera un usuario real conectado, pero sin necesitar un login verdadero ni una base de datos.

-  Qué datos decidieron mostrar en el perfil.

  El nombre, la foto de perfil, la cantidad de seguidores, likes y las imágenes de publicaciones

-  Qué estados utilizaron para seleccionar publicaciones o manejar la vista individual.

  Utilizamos estados con useState para guardar las publicaciones obtenidas desde la API (publicaciones), controlar la carga (loading) y manejar errores (error). También en PostCard.jsx usamos el estado likes para saber qué publicaciones tienen like y actualizar la vista individual de cada post cuando el usuario presiona el botón de corazón.

La explicación debe justificar técnicamente la existencia de los componentes creados.

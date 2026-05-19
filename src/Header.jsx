import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">Instagram Clone</Link>
      </div>
      <div className="center"> 
        <input className="search" placeholder="Buscar" />
      </div>
      <nav className="nav">
      </nav>
    </header>
  );
}

export default Header;
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link className='Logo' to='/' >PRIME<span>FLIX</span></Link>
            <Link className='favoritos' to='/favoritos' >Meus Filmes</Link>
        </header>
    );
}

export default Header;
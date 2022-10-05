import { NavLink } from 'react-router-dom'
import header from '../img/header.svg'
function Header() {
    return (
        <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src={header} alt="Logo Cupcake" />
                </a>
            </div>

            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cupcakes">Cupcakes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutUs">Sobre nosotros</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>

        </div>
    </header>
    )
}

export default Header
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Accueil</li></NavLink>
                        <NavLink to="/Favoris" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Favoris</li></NavLink>
                    </ul>
                </nav>
                <h1>React Movies</h1>
            </div>
        </div>
    );
};

export default Header;
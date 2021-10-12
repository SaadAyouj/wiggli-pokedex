import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" class="logo">PokiWiggli</Link>
            <div className="header-right">
                <Link to="/">Home</Link>
                <Link to="/types">Types</Link>
            </div>
        </div>
    )
}

export default Header

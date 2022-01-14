import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCards from './ShoppingCard/ShoppingCards';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <Link to={'/'} className="navbar-brand mx-2">Mini-Eccomerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navbarDark">
            <div className='px-2'>
                <ShoppingCards />
            </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
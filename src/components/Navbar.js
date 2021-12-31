import React from 'react';
import ShoppingCards from './ShoppingCard/ShoppingCards';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">Mini-Eccomerce</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse show" id="navbarDark">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
        <ShoppingCards />
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
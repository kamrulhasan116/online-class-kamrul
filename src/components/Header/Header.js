import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className= "header">
            
         <img src={logo} alt=""/>
         <h1>Kamrul-Online-School</h1>
        

         <nav className="nav nav-pills nav-justified">
            <a className="nav-link text-white bg-dark " href="#">Course name</a>
            <a className="nav-link text-white bg-dark" href="#">Course details</a>
            <a className="nav-link text-white bg-dark" href="#">Course price</a>
            <a className="nav-link text-white bg-dark " href="#" tabindex="-1" aria-disabled="true">About us</a>
            
                </nav>


            
            
        </div>
    );
};

export default Header;
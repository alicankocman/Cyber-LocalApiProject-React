//header.jsx
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img className='logocyber' src='./src/assets/Logo.png' alt="Logo"></img>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="  Search" aria-label="Search"></input>
        </form>
        <span class="material-symbols-outlined">
search
</span>
            <li className="nav-item">
              <a className="nav-link  home" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link about" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link contact" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link blog" href="#">Blog</a>
            </li>
          </ul>
          <div className="logo">
            <img className='favorites' src='./src/assets/Favorites.png' alt="Favorites"></img>
            <img className='cart' src='./src/assets/Cart1.png' alt="Cart"></img>
            <img className='vector' src='./src/assets/Vector.png' alt="Vector"></img>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

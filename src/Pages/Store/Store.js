import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../../components/GradientButton/GradientButton';

import logo from '../../images/logo.svg';
import chevron from '../../images/chevron-left.svg';
import store from '../../images/image-placeholder.png';

import './Store.css'

export default function StoreName() {
  return (
    <div className="store-section">
      <div className='store-inner'>
        <div className="container">
          <div className="logo"><img src={logo} alt="logo" /></div>
          <div className="store-row">
            <div className="col-left">
              <div className="digit">
                <p>01<span>/ 04</span> </p>
              </div>
              <div className="main-title">
                <h2>Name your Store</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
              </div>
              <div className="input-style">
                <input className='form-control' placeholder="Ex. Ginny Cake Shop" />
                <p>Not sure about the name, <span>Want us to suggest?</span></p>
              </div>
              <div className="backwithbutton">
                <Link className="arrow"><img src={chevron} alt='chevron' /></Link>
                <GradientButton text="Continue" />
              </div>
            </div>
            <div className="col-right">
              <div className="navigation">
                <div className="store-name">
                  <h2>Store Name</h2>
                </div>
                <div className="store-list">
                  <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Career</Link></li>
                    <li><Link>Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="main-img">
                <img src={store} alt="store" />
              </div>
              <div className="subtitle-text">
                <h3>Categories</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
              <div className="img-area">
                <div className="col">
                  <img src={store} alt="store" />
                </div>
                <div className="col">
                  <img src={store} alt="store" />
                </div>
                <div className="col">
                  <img src={store} alt="store" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            <p>© Copyright 2023 <span>Company</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
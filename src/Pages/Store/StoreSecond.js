import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../../components/GradientButton/GradientButton';

import chevron from '../../images/chevron-left.svg';
import logo from '../../images/logo.svg';
import icon from '../../images/Icon.svg';
import store from '../../images/image-placeholder.png';

export default function StoreSecond() {
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
              <div className="main-title big-title">
                <h2>Name your Store</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum</p>
              </div>
              <div className="input-style">
                <input className='form-control' />
                <p>Not sure about the name, <span>Want us to suggest?</span></p>
              </div>
              <div className="input-style input-style-domain">
                <div className='checkicon'>
                  <img src={icon} alt="icon" />
                </div>
                <label>.company.com</label>
                <input className='form-control' />
                <div className="domain-caption">
                  <div className="left">
                    <p>This is temporary domain, you can add custom domain in settings<Link> Learn more</Link></p>

                  </div>
                  <div className="right">
                    <button >Generate unique domain</button>
                  </div>
                </div>
              </div>
              <div className="backwithbutton">
                <Link className="arrow"><img src={chevron} alt='chevron' /></Link>
                <GradientButton text="Continue" />
              </div>
            </div>
            <div className="col-right store-images">
              <div className="navigation">
                <div className="store-name big-title">
                  <h2>Superthread</h2>
                </div>

              </div>
              <div className="main-img">
                <img src={store} alt="store" />
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
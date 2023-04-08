import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import layerimg from '../../images/login-banner.png';
import Button from '../../component/Button';
import SocialButton from '../../component/SocialButton';
import './Login.css';
import CountryInput from '../../component/CountryInput';

export default function Login() {
  return(
    <div className="login-section">
          <div className='login-inner'>
              <div className="container">
                  <div className="login-row">
                    <div className="col-left">
                        <div className="logo-text">
                            <img src={logo} alt="logo" />
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla eget adipiscing faucibus platea. Eu ultrices ipsum
                            </p>
                        </div>
                        <div className="img-block">
                            <img src={layerimg} alt="layer-img" />
                        </div>
                    </div>
                    <div className="col-right">
                      <div className="login-from">
                          <div className="login-block">
                          <div className="title">
                            <h2>Get Started !</h2>
                            <span>New to Company? <Link>Sign up</Link></span>
                          </div>
                            <form>
                                <div className="form-group">
                                  <label>Enter Mobile Number</label>
                                  <div className="flag-style">
                                    <CountryInput />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>Enter OTP</label>
                                  <input type='number' className="form-control" placeholder="Enter four digit OTP"/>
                                  <div className="second-code">
                                  <p>Haven’t received code?<span>Resend in 0:59 sec</span></p>
                                </div>
                                </div>
                               
                                <div className="form-group">
                                  <Button />
                                </div>
                                <div className="sign-text">
                                  <p>Or sign in with</p>
                                </div>
                               <SocialButton />
                               <div className="caption">
                                   <p> By creating an account means you agree to the Terms
                                    & Conditions and our Privacy Policy</p>
                               </div>
                            </form>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  ) 
 ;
}
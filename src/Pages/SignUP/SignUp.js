import React from 'react';
import { Link } from 'react-router-dom';
import SocialButton from '../../components/SocialButton';
import GradientButton from '../../components/GradientButton/GradientButton';
import CountryInput from '../../components/CountryInput';
import './Signup.css';

export default function Signup() {
  return (
    <div className="signup-section">
      <div className='sign-inner'>
        <div className="container">
          <div className="sign-row">

            <div className="col-main">
              <div className="sign-from">
                <div className="sign-block">
                  <div className="title">
                    <h2>Create store in 10mins</h2>
                    <span>Already have a account? <Link to={'/'}>Sign In</Link></span>
                  </div>
                  <form>
                    <div className="half-row">
                      <div className="form-group">
                        <label>First Name</label>
                        <input type='number' className="form-control" placeholder="Your First Name" />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type='number' className="form-control" placeholder="Your Last Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Enter Mobile Number</label>
                      <div className="flag-style">
                        <CountryInput />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Enter OTP</label>
                      <input type='number' className="form-control" placeholder="Enter four digit OTP" />
                      <div className="second-code">
                        <p>Haven’t received code?<span>Resend in 0:59 sec</span></p>
                      </div>
                    </div>

                    <div className="form-group">
                      <GradientButton text="Signup" />
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
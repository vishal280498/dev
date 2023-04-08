import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import Facebook from '../images/facebook.png';
export default function SocialButton() {
  return(
    <div className="social-button">
            <Link className="social-icon"><img src={google} alt="google" /> Google</Link>
            <Link className="social-icon"><img src={Facebook} alt="facebook" /> Facebook</Link>
    </div>
  );
}
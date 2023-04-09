import React from 'react';
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function CountryInput() {

  const [value, setValue] = useState();

  return (
    <div className="phonenumber-select">
      <PhoneInput
        placeholder="Enter Mobile Number"
        defaultCountry="IN"
        value={value}
        onChange={setValue} />
    </div>
  );
}
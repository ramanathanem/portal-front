import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap'
import "../Style/Logins.css";

const OtpScreen = ({handleOtpVerification,otpError}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); 
  const otpInputRefs = Array.from({ length: 6 }, () => React.createRef());

  useEffect(() => {
    otpInputRefs[0].current.focus();
  }, []);

  const handleOtpChange = (index, value) => {
    // Allow only numeric values
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (index < otp.length - 1 && value !== '') {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const keyCode = e.which || e.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
      handleOtpChange(index, String.fromCharCode(keyCode));
    } else if (keyCode === 8 && index > 0 && otp[index] === '') {
      // Handle backspace to move focus to the previous input field
      otpInputRefs[index - 1].current.focus();
    } else {
      // Clear the current value on invalid input
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    const otpdata = { otp: enteredOtp };
    handleOtpVerification(otpdata);
    setOtp(['', '', '', '', '', '']);
   
  };

  return (
    <div className='otp-screen bg-white' >
      <p style={{display:'flex',justifyContent:'center'}} >Please check your Registered Mail.<br/>Enter the Valid OTP Here</p>
      <Form className='otp-screen-field'  onSubmit={handleSubmit}>
        {otp.map((digit, index) => (
          <input className='otp-screen-control'
            key={index}
            ref={otpInputRefs[index]}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            required
          />
        ))}
        <Button variant='primary' type="submit" style={{marginLeft :'10px'}}>Verify</Button>
      </Form>
      {otpError?<p className="error text-danger">Please Enter the valid OTP...</p>: ' '}
    </div>
  );
};

export default OtpScreen;

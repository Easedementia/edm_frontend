// SuccessPage.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSuccessMessage = () => {
    const navigate = useNavigate();

    useEffect(() =>{
        const timeoutId = setTimeout(() =>{
            navigate('/');
        }, 3500);
        return () => clearTimeout(timeoutId);
    },[navigate]);


  return (
    <div className="text-center d-flex flex-column align-items-center justify-content-center">
    
    <img
      src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif"
      alt="Success GIF"
      style={{ width: '400px', height: '400px' }}
    />
    <h1 style={{color:'black'}} >Booking Successful!</h1>
  </div>
  );
};

export default BookingSuccessMessage;

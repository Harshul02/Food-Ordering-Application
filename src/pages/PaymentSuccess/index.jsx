import { Alert } from "../../components/elements/Alert";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 3000); 

    return () => clearTimeout(redirectTimeout); // Clear the timeout if the component unmounts
  }, [navigate]);

    return (
        <div className="max-w-lg mx-auto p-4">
            <Alert variant="success">
                Your payment was successful
            </Alert>
        </div>
    )
}

export default PaymentSuccess;
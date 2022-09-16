import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const KEY =
  "pk_test_51LHp8UI3BerN3tlTyqGI27HMVB8TT0DoTwx3nRTJLM5nmIDbONfpqHEjWSTh3VnPU1Z8xMi3iBpWQRW0eEgj8fHt00AKfz02Vn";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/success")
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest()
  }, [stripeToken, navigate]);

  return (
    <div className="pay">
      <h2>Make Your Payment Here</h2>
      {stripeToken ? (<span>Processing Please Wait.......</span>) : (
      <StripeCheckout
        name="Galleh's Shop"
        description="Your total is $20"
        image="./image.png"
        billingAddress
        shippingAddress
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button className="payBtn">Pay Now</button>
      </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;

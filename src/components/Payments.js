import React, { useState } from "react";
import GooglePayButton from "@google-pay/button-react";

const Payments = () => {
  const [amount, setAmount] = useState();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#001220] ">
      <input
        className="mb-5 text-4xl"
        type="number"
        name="amount"
        value={amount}
        onChange={() => {
          setAmount(amount);
        }}
        autoFocus
      />
      <GooglePayButton
        className=" hover:scale-110 transition-all ease-in-out duration-200 rounded-lg border-2"
        environment="TEST"
        buttonType="pay"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "INR",
            countryCode: "IN",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
    </div>
  );
};

export default Payments;

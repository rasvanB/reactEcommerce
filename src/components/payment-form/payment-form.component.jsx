import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CustomButton from "../custom-button/custom-button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: "500",
      }),
    }).then((res) => res.json());
    const {
      intent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Jenny Rosen",
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      alert(
        paymentResult.paymentIntent.status === "succeeded"
          ? "success"
          : "failure"
      );
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment</h2>
        <CardElement />
        <CustomButton isInverted>Pay Now</CustomButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

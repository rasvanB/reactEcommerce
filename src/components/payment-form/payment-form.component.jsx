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
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment</h2>
        <CardElement />
        <CustomButton isInverted>Pay Now</CustomButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

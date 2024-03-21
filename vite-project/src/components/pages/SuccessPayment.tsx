import "./SuccessPayment.scss";
import check from "../../assets/check.svg";
import Button from "../atoms/Button";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const SuccessPayment = () => {
  const { setShoppingCart } = useContext(DataContext);

  setShoppingCart({});

  return (
    <div className="success">
      <img src={check} alt="Checkmark" className="success__check" />
      <h3>Payment Sucessful </h3>
      <div className="success__text">
        <p>
          Your payment has been successfully processed and your purchase is now
          confirmed.
        </p>
        <p>
          If you have any questions or need further assistance, please don't
          hesitate to contact us.
        </p>
      </div>
      <Button text="Return to Homepage" color="#c1dcdc" link="/home" />
    </div>
  );
};

export default SuccessPayment;

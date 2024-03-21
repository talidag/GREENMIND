import React from "react";
import Button from "../atoms/Button";

interface PopupLoginProps {
  setIsPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ setIsPopupActive }) => {
  return (
    <div className="best__login">
      <p className="best__login__close" onClick={() => setIsPopupActive(false)}>
        x
      </p>
      <h4>Please Log In</h4>
      <p>To add this product to your favorites, you need to be logged in.</p>
      <Button text="Login" link="/profile" />
      <p
        onClick={() => setIsPopupActive(false)}
        className="best__login__continue"
      >
        Continue Browsing
      </p>
    </div>
  );
};

export default PopupLogin;

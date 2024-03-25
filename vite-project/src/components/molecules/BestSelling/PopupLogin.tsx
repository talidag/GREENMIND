import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface PopupLoginProps {
  setIsPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupLogin: React.FC<PopupLoginProps> = ({ setIsPopupActive }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="best__login">
      <p className="best__login__close" onClick={() => setIsPopupActive(false)}>
        x
      </p>
      <h4>Please Log In</h4>
      <p>To add this product to your favorites, you need to be logged in.</p>
      <button onClick={() => loginWithRedirect()}>Sign In</button>
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

import { useNavigate } from "react-router-dom";
import arrow from "../../assets/ArrowRight.svg";

interface ButtonProps {
  [key: string]: string;
}

const Button = ({ text, color, link }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "0.8rem",
        padding: "1.2rem 2.4rem",
        gap: "1rem",
        fontSize: "1.8rem",
        fontWeight: "500",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => navigate(link)}
    >
      {text}
      <img src={arrow} alt="Arrow pointing right" />
    </button>
  );
};

export default Button;

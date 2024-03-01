import arrow from "../../assets/ArrowRight.svg";

interface ButtonProps {
  [key: string]: string;
}

const Button = ({ text, color, link }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        borderRadius: "0.8rem",
        padding: "1.2rem 2.4rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "1.8rem",
        fontWeight: "500",
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
      <img src={arrow} alt="Arrow pointing right" />
    </button>
  );
};

export default Button;

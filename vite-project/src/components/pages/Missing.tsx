import "./Missing.scss";
import left from "../../assets/left-missing (1).jpg";
import right from "../../assets/right-missing (1).jpg";
import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Missing = () => {
  const [seconds, setSeconds] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    let timer1 = setTimeout(() => setSeconds((prev) => prev - 1), 1000);

    if (seconds === 0) {
      navigate("/home");
    }

    return () => {
      clearTimeout(timer1);
    };
  });

  return (
    <section className="missing">
      <img src={left} alt="withered plant" className="missing__flower-img" />
      <div className="missing__text">
        <Title title="Page Not Found" />
        <Subtitle title="We can't find the page you're looking for." />
        <p>
          {`Redirecting to homepage in `}
          <span>{seconds}</span>
          {` seconds`}
        </p>
      </div>
      <img src={right} alt="withered plant" className="missing__flower-img" />
    </section>
  );
};

export default Missing;

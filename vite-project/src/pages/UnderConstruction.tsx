import "./Missing/Missing.scss";
import left from "../assets/left-missing (1).jpg";
import right from "../assets/right-missing (1).jpg";
import Title from "../components/atoms/Title";
import Subtitle from "../components/atoms/Subtitle";
import construction from "../assets/noto-v1_construction.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const UnderConstruction = () => {
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
        <Title title="UNDER CONSTRUCTION" />
        <Subtitle title="This content is not available for the moment." />
        <p>
          {`Redirecting to homepage in `}
          <span>{seconds}</span>
          {` seconds`}
        </p>
        <img
          src={construction}
          alt="construction icon"
          className="missing__construction"
        />
      </div>

      <img src={right} alt="withered plant" className="missing__flower-img" />
    </section>
  );
};

export default UnderConstruction;

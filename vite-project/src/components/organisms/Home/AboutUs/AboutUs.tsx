import "./AboutUs.scss";
import AboutUsCard from "../../../molecules/AboutUsCard";
import flower from "../../../../assets/flower.svg";
import box from "../../../../assets/box.svg";
import phone from "../../../../assets/phone.svg";
import Title from "../../../atoms/Title";
import Subtitle from "../../../atoms/Subtitle";

const AboutUs = () => {
  const aboutTitle = "About Us";
  const aboutSubtitle = "Order now and appreciate the beauty of nature";
  const aboutUsCards = [
    {
      picture: flower,
      alt: "Flower icon",
      title: "Large Assortment",
      description:
        "we offer many different types of products with fewer variations in each category.",
    },
    {
      picture: box,
      alt: "Box icon",
      title: "Fast & Free Shipping",
      description:
        "4-day or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      picture: phone,
      alt: "Phone icon",
      title: "24/7 Support",
      description:
        "answers to any business related inquiry 24/7 and in real-time.",
    },
  ];
  return (
    <section className="about">
      <div className="about__top">
        <Title title={aboutTitle} />
        <Subtitle title={aboutSubtitle} />
      </div>
      <div className="about__cards">
        {aboutUsCards.map((card, index) => (
          <AboutUsCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

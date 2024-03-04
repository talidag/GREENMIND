import Title from "../../atoms/Title";
import "./Testimonials.scss";
import testimonial1 from "../../../assets/testimonial1.png";
import testimonial2 from "../../../assets/testimonial2.png";
import slider from "../../../assets/slider.svg";
import TestimonialsCard from "../../molecules/TestimonialsCard";

const Testimonials = () => {
  const testimonialsTitle = "What customers say about GREEMIND?";
  const testimonialsData = [
    {
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "John Doe",
      ocupation: "Youtuber",
      picture: testimonial1,
      rating: 4.5,
    },
    {
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      name: "John Doe",
      ocupation: "Youtuber",
      picture: testimonial2,
      rating: 4,
    },
  ];
  return (
    <section className="testimonials">
      <div className="testimonials__top">
        <Title title={testimonialsTitle} />
        <img src={slider} alt="" />
      </div>
      <div className="testimonials__cards">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

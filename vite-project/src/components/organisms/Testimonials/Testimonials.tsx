import Title from "../../atoms/Title";
import "./Testimonials.scss";
import testimonial1 from "../../../assets/testimonial1.png";
import testimonial2 from "../../../assets/testimonial2.png";
import slider from "../../../assets/slider.svg";
import TestimonialsCard from "../../molecules/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        <Swiper
          spaceBetween={30}
          slidesPerView={1.6}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard key={index} {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

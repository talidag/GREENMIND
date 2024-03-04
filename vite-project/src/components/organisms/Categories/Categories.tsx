import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/Title";
import "./Categories.scss";
import category1 from "../../../assets/category1.png";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.png";
import CategoriesCard from "../../molecules/CategoriesCard";

const Categories = () => {
  const categoriesTitle = "Categories";
  const categoriesSubtitle = "Find what you are looking for";
  const categoriesCards = [
    {
      image: category1,
      title: "Natural Plants",
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: category2,
      title: "Plant Accessories",
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
    {
      image: category3,
      title: "Artificial Plants",
      text: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
    },
  ];
  return (
    <section className="categories">
      <div className="categories__top">
        <Title title={categoriesTitle} />
        <Subtitle title={categoriesSubtitle} />
      </div>
      <div className="categories__cards">
        {categoriesCards.map((card, index) => (
          <CategoriesCard key={index} {...card} selectedIndex={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;

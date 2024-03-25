import { useState } from "react";
import search from "../../../assets/Search.svg";
import { useNavigate } from "react-router";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const link = `/products/${searchText.toLowerCase()}`;
    navigate(link);
  };

  // To add zod and react forms in the future

  return (
    <div className="hero__search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchProduct">Search a Product</label>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="searchProduct"
          required
          maxLength={30}
        />
        <span className={`${searchText.length > 29 ? "show" : ""}`}>
          * maximum length: 30 characters
        </span>
        <button type="submit">
          <img src={search} alt="Search icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

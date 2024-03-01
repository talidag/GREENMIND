import search from "../../assets/Search.svg";

const SearchBox = () => {
  return (
    <div className="hero__search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">
          <img src={search} alt="Search icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

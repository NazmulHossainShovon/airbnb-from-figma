import "./Search.css";
import { IoSearchCircle } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search-container">
      <div className="location-div">Search</div>
      <div className="search-icon">
        <IoSearchCircle size={40} color="#E0565B" />
      </div>
    </div>
  );
};

export default Search;

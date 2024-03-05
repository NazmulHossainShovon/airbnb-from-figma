import HeartButton from "../HeartButton/HeartButton";
import "./ListingCard.css";

const ListingCard: React.FC = ({ data }) => {
  return (
    <div className="listing-card-container">
      <img className="image" src={data.imageSrc} alt="Listing" />
      <div className="heart-button-container">
        <HeartButton />
      </div>

      <div className="description-container">
        <p className="location-div">{data.location}</p>
        <p className="date-div">{data.date}</p>
        <div className="price-container">
          <div className="price-div">$ {data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

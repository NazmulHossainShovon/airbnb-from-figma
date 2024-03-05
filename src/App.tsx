import "./App.css";
import Categories from "./components/Categories/Categories";
import Container from "./components/Container/Container";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";
import ListingCard from "./components/ListingCard/ListingCard";
import Navbar from "./components/Navbar/Navbar";
import Taxes from "./components/Taxes/Taxes";

const listings = [
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/112137761/display_1500/stock-photo-eiffel-tower-paris-france-112137761.jpg",
    location: "Paris",
    date: "May 2024",
    price: "250$",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/552100717/display_1500/stock-photo-tokyo-skyline-and-mountain-fuji-in-japan-552100717.jpg",
    location: "Tokyo",
    date: "Aug 2024",
    price: "700$",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/2386149989/display_1500/stock-photo-view-of-the-iconic-trevi-fountain-in-rome-italy-showcasing-its-intricate-baroque-architecture-2386149989.jpg",
    location: "Rome",
    date: "Jun 2024",
    price: "400$",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/57571180/display_1500/stock-photo-new-york-city-skyline-cityscape-with-statue-of-liberty-over-hudson-river-with-midtown-manhattan-57571180.jpg",
    location: "New York City",
    date: "Jul 2024",
    price: "850$",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/435627745/display_1500/stock-photo-aerial-view-of-botafogo-bay-from-high-angle-rio-de-janeiro-435627745.jpg",
    location: "Rio de Janeiro",
    date: "Sep 2024",
    price: "500$",
  },
  {
    imageSrc:
      "https://www.shutterstock.com/shutterstock/photos/139999093/display_1500/stock-photo-london-the-uk-red-bus-in-motion-and-big-ben-the-palace-of-westminster-the-icons-of-england-in-139999093.jpg",
    location: "London",
    date: "Oct 2024",
    price: "300$",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <Filters />
      <Taxes />
      <div className="places-div">
        {listings.map((listing: any) => (
          <ListingCard data={listing} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;

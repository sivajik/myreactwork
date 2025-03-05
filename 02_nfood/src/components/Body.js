import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setTheListOfRestaurans] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTheListOfRestaurans(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setTheListOfRestaurans(
              listOfRestaurants.filter(
                (eachRes) => eachRes.info.avgRating > 4.5
              )
            );
          }}
        >
          Top Rated Restaurans
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((eachRes) => (
          <RestaurantCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;

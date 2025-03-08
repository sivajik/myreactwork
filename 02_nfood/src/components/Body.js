import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Empty from "./Empty";

const Body = () => {
  const [listOfRestaurants, setTheListOfRestaurans] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const allRes =
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(allRes);
    setTheListOfRestaurans(allRes);
    setFilteredRestaurants(allRes);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : filteredRestaurants.length == 0 ? (
    <Empty />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const fildRestaurants = listOfRestaurants.filter((eachres) =>
                eachres.info.name
                  .toUpperCase()
                  .includes(searchText.toUpperCase())
              );
              setFilteredRestaurants(fildRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurants.map((eachRes) => (
          <RestaurantCard key={eachRes.info.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;

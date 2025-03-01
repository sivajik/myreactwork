import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setTheListOfRestaurans] = useState(
    resList /*[
    {
      type: "restaurant",
      data: {
        id: 1,
        name: "KFC",
        costForTwo: 40000,
        avgRating: 3.8,
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        deliveryTime: 36,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 2,
        name: "Meghana Foods",
        costForTwo: 50000,
        avgRating: 4.2,
        cuisines: ["Indian", "Biryani"],
        deliveryTime: 56,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 3,
        name: "Kannur Foods",
        costForTwo: 40000,
        avgRating: 4.6,
        cuisines: ["Chat", "Roti"],
        deliveryTime: 46,
      },
    },
  ]*/
  );

  /*let listOfRestaurantsJS = [
    {
      type: "restaurant",
      data: {
        id: 1,
        name: "KFC",
        costForTwo: 40000,
        avgRating: 3.8,
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        deliveryTime: 36,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 2,
        name: "Meghana Foods",
        costForTwo: 50000,
        avgRating: 4.2,
        cuisines: ["Indian", "Biryani"],
        deliveryTime: 56,
      },
    },
    {
      type: "restaurant",
      data: {
        id: 3,
        name: "Kannur Foods",
        costForTwo: 40000,
        avgRating: 4.6,
        cuisines: ["Chat", "Roti"],
        deliveryTime: 46,
      },
    },
  ];*/

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setTheListOfRestaurans(
              listOfRestaurants.filter(
                (eachRes) => eachRes.data.avgRating > 4.0
              )
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurans
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((eachRes) => (
          <RestaurantCard key={eachRes.data.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;

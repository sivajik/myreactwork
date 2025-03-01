import RestaurantCard from "./RestaurantCard";

const resList = [
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
      avgRating: 3.6,
      cuisines: ["Chat", "Roti"],
      deliveryTime: 46,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="res-container">
        {resList.map((eachRes) => (
          <RestaurantCard key={eachRes.data.id} resData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;

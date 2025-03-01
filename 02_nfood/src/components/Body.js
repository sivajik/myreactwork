import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

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

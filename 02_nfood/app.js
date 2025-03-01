import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "lightgray",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,w_1097,h_480/f_auto/q_auto/dpr_1.0/d_uk:cuisines:chinese-8.jpg/v1/uk/restaurants/118058.jpg"
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

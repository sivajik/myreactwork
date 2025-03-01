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

export default RestaurantCard;

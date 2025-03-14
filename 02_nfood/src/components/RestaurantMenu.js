import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resid } = useParams();
  console.log("Restaurant: ", resid);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("Menu: ", itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard.card?.info?.id}>
            {itemCard.card?.info?.name} - {itemCard.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

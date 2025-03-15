import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  console.log("Restaurant: ", resid);

  const resInfo = useRestaurantMenu(resid);

  if (resInfo == null) {
    return <h1>Fetching restaurant menu data</h1>; //<Shimmer />;
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

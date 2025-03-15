import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    //console.log(json);
    setAllData(json?.data);
  };
  return allData;
};

export default useRestaurantMenu;

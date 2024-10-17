import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState } from "react";

//check why curly braced{}  are not working or logic in multiline is not working
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-container"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);

            //need to filter the data
            //update the state- restaurant List
            //call function
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-List">
        {restaurants.map((restuarant) => {
          return (
            <RestaurantCard {...restuarant.info} key={restuarant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

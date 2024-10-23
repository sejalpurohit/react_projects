import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//check why curly braced{}  are not working or logic in multiline is not working
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setallRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    //make API call here
    getRestaurants();
  }, []);

  if(!allRestaurants) return null;

  if(filteredRestaurants.length ===0) return <h1>NO Restaurants found for your match</h1>

  return  (filteredRestaurants.length === 0) ? <Shimmer /> : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);

            //need to filter the data
            //update the state- restaurant List
            //call function
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-List">

        {/* {no restaurant find logic} */ }
        {filteredRestaurants.map((restuarant) => {
          return (
            <RestaurantCard {...restuarant.info} key={restuarant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

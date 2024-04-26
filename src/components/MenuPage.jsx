import FoodSection from './FoodSection';
import axios from 'axios';
import '../styles/MenuPage.css';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [foodData, setFoodData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [fullMenu, setFullMenu] = useState([]);

  // Function that loops through the JSON and returns an array of each unique cuisine type.
  function sortOutCuisineTypes(array) {
    let allCuisineTypes = [];
    for (let object of array) {
      allCuisineTypes.push(object.cuisine_type);
    }
    let sortedArray = allCuisineTypes.sort();
    return sortedArray.filter((e, i) => sortedArray.indexOf(e) === i);
  }

  // Function that handles the select element values.
  function handleChange(e) {
    if (e.target.value.length > 20) {
      setSelectedCountry(() => {
        return e.target.value.split(',');
      });
    } else {
      setSelectedCountry(() => {
        return [e.target.value];
      });
    }
    console.log('hiii', selectedCountry);
  }

  // Fetches data and saves it in state on page load.
  useEffect(() => {
    async function fetchFoodData() {
      try {
        const res = await axios.get(
          'https://raw.githubusercontent.com/bootcamp-students/random-restaurant-json/main/foodList.json'
        );
        setFoodData(res.data);
        setSelectedCountry(sortOutCuisineTypes(res.data));
        setFullMenu(sortOutCuisineTypes(res.data));
      } catch (err) {
        console.log(err);
      }
    }

    fetchFoodData();
  }, []);

  return (
    <div>
      <main className="menu-page">
        <div className="country-picker">
          <label htmlFor="countries">Pick a Country</label>
          <select id="countries" onChange={handleChange}>
            <option key={-1} value={fullMenu}>
              Full Menu
            </option>
            {/* Loops through array of cuisine types to create option elements. */}
            {sortOutCuisineTypes(foodData).map((e) => {
              return (
                <option
                  key={sortOutCuisineTypes(foodData).indexOf(e)}
                  value={e}
                >
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <h1>Menu</h1>
        {/* Loops through the selected country and creates a FoodSection component for each*/}
        {selectedCountry.map((e) => {
          return (
            <FoodSection
              foodData={foodData}
              heading={e}
              key={sortOutCuisineTypes(foodData).indexOf(e) + 0.1}
            />
          );
        })}
      </main>
    </div>
  );
}

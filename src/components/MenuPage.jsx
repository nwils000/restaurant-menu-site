import FoodSection from './FoodSection';
import axios from 'axios';
import '../styles/MenuPage.css';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [foodData, setFoodData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [fullMenu, setFullMenu] = useState([]);

  function sortOutCuisineTypes(array) {
    let allCuisineTypes = [];
    for (let object of array) {
      allCuisineTypes.push(object.cuisine_type);
    }
    let sortedArray = allCuisineTypes.sort();
    return sortedArray.filter((e, i) => sortedArray.indexOf(e) === i);
  }

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
    console.log(typeof e.target.value);
  }

  useEffect(() => {
    async function fetchFoodData() {
      try {
        const res = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        setFoodData(res.data);
        setSelectedCountry(sortOutCuisineTypes(res.data));
        setFullMenu(sortOutCuisineTypes(res.data));
        console.log('hiii', sortOutCuisineTypes(res.data));
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

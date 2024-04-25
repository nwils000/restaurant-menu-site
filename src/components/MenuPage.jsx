import Navbar from './Navbar';
import FoodSection from './FoodSection';
import Footer from './Footer';
import axios from 'axios';
import '../styles/MenuPage.css';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [foodData, setFoodData] = useState([]);

  function sortOutCuisineTypes(array) {
    let allCuisineTypes = [];
    for (let object of array) {
      allCuisineTypes.push(object.cuisine_type);
    }
    let sortedArray = allCuisineTypes.sort();
    return sortedArray.filter((e, i) => sortedArray.indexOf(e) === i);
  }

  useEffect(() => {
    async function fetchFoodData() {
      try {
        const res = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        setFoodData(res.data);
        console.log('full data array, ', res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchFoodData();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="menu-page">
        <h1>Full Menu</h1>
        {sortOutCuisineTypes(foodData).map((e) => {
          return (
            <FoodSection
              foodData={foodData}
              heading={e}
              key={sortOutCuisineTypes(foodData).indexOf(e)}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

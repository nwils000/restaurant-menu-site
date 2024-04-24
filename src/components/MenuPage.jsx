import Navbar from './Navbar';
import FoodSection from './FoodSection';
import Footer from './Footer';
import axios from 'axios';
import '../styles/MenuPage.css';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [foodData, setFoodData] = useState('foooood');

  useEffect(() => {
    async function fetchFoodData() {
      try {
        const res = await axios.get('https://www.jsonkeeper.com/b/MDXW');
        setFoodData(res.data);
        console.log(res.data);
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
        <div>{foodData[0].title}</div>
        <FoodSection foodData={foodData} />
        <FoodSection />
        <FoodSection />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from './Navbar';
import FoodSection from './FoodSection';
import Footer from './Footer';
import '../styles/MenuPage.css';

export default function MenuPage() {
  return (
    <div>
      <Navbar />
      <main className="menu-page">
        <FoodSection />
        <FoodSection />
        <FoodSection />
      </main>
      <Footer />
    </div>
  );
}

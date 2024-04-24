import FoodTypeHeading from './FoodTypeHeading';
import FoodDisplayGrid from './FoodDisplayGrid';

export default function FoodSection() {
  return (
    <div className="food-section">
      <FoodTypeHeading />
      <FoodDisplayGrid />
    </div>
  );
}

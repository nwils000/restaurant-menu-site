import FoodTypeHeading from './FoodTypeHeading';
import FoodDisplayGrid from './FoodDisplayGrid';

export default function FoodSection(props) {
  return (
    <div className="food-section">
      <FoodTypeHeading foodData={props.foodData} heading={props.heading} />
      <FoodDisplayGrid foodData={props.foodData} heading={props.heading} />
    </div>
  );
}

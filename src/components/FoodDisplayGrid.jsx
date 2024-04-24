import FoodDisplay from './FoodDisplay';

export default function FoodDisplayGrid(props) {
  let filteredArray = props.foodData.filter(
    (e) => props.heading === e.cuisine_type
  );
  console.log(props.foodData.filter((e) => props.heading === e.cuisine_type));
  return (
    <div className="food-display-grid">
      {filteredArray.map((e, i) => {
        return (
          <FoodDisplay title={e.title} description={e.description} key={i} />
        );
      })}
    </div>
  );
}

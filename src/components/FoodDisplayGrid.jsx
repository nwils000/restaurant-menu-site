import FoodDisplay from './FoodDisplay';

export default function FoodDisplayGrid(props) {
  let filteredArray = props.foodData.filter(
    (e) => props.heading === e.cuisine_type.name
  );

  console.log('grid props', props);
  return (
    <div className="food-display-grid">
      {/* Loops through every menu item with cuisine_type that matches the heading and creates a FoodDisplay component*/}
      {filteredArray.map((e, i) => {
        console.log('title', e.title);
        return (
          <FoodDisplay
            title={e.title}
            description={e.description}
            price={e.price}
            key={i}
          />
        );
      })}
    </div>
  );
}

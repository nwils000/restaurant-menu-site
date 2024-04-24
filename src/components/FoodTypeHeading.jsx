export default function FoodTypeHeading(props) {
  return (
    <div className="food-type-heading">
      <h2>{props.heading}</h2>
      <div className="food-type-heading-hr-lines"></div>
      <div className="food-type-heading-hr-lines"></div>
    </div>
  );
}

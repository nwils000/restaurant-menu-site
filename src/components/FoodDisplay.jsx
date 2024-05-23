import CartButton from './CartButton';

export default function FoodDisplay(props) {
  console.log('props: ', props);
  return (
    <section className="food-display">
      <p>{`$${props.price}`}</p>
      <div className="food-display-main-content">
        <h3>{props.title}</h3>
        <p className="food-display-description">{props.description}</p>
      </div>
      <CartButton title={props.title} price={props.price} />
    </section>
  );
}

import Likes from './Likes';

export default function FoodDisplay(props) {
  return (
    <section className="food-display">
      <div className='food-display-main-content'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <Likes />
    </section>
  );
}

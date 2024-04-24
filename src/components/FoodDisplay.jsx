import Likes from './Likes';

export default function FoodDisplay() {
  return (
    <section className="food-display">
      <img src="/assets/BIRDS.png" alt="birds" className="food-display-image" />
      <div>
        <h3>Breakfast Sampler</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio
          impedit perspiciatis quisquam repellat in at, iste consequuntur,
          pariatur repellendus nostrum?
        </p>
      </div>
      <Likes />
    </section>
  );
}

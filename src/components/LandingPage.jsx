import '../styles/LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <img
          src="/assets/international-cuisine-hero-img.png"
          alt="A hero image of a plate with a variety of different types of food on it."
          className="landing-page-hero-image"
        />
        <div className="landing-page-hero-text-wrapper">
          <h1 className="landing-page-h1">Earth Food</h1>
          <p className="landing-page-sub-text">
            International Meals, Intra-Testinal Feels
          </p>
        </div>
      </div>
    </>
  );
}

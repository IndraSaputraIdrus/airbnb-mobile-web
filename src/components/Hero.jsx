import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <img src={HeroImg} className="hero__image" alt="hero image" />
        <h1 className="hero__title">Online Experiences</h1>
        <p className="hero__text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </header>
  );
}

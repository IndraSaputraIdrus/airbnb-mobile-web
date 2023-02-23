import StarLogo from "../assets/Star.svg";

export default function Card({
  status,
  image,
  totalRating,
  rating,
  country,
  description,
  price,
}) {
  return (
    <div className="card">
      <div className="card__status">{status}</div>
      <img className="card__image" src={image} alt="card image" />
      <div className="card__rating">
        <img src={StarLogo} />
        <p>
          {rating}
          <span>
            ({totalRating})&bull;{country}
          </span>
        </p>
      </div>
      <p className="card__description">{description}</p>
      <p className="card__price">
        <span>Form {price}</span> / person
      </p>
    </div>
  );
}

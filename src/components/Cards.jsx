import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Card from "./Card";

const listCard = [
  {
    id: 1,
    status: "sold out",
    image: Image1,
    totalRating: 6,
    rating: "5.0",
    country: "USA",
    description: "Life lesson with Katie Zafered",
    price: "$136",
  },
  {
    id: 2,
    status: "online",
    image: Image2,
    totalRating: 30,
    rating: "5.0",
    country: "USA",
    description: "Learn wedding photography",
    price: "$125",
  },
  {
    id: 3,
    status: "online",
    image: Image3,
    totalRating: 2,
    rating: "4.8",
    country: "USA",
    description: "Group Mountain Biking",
    price: "$50",
  },
];

export default function Cards() {
  return (
    <div className="cards">
      <div className="container">
        {listCard.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

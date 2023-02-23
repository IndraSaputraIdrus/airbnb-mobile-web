import Logo from "../assets/airbnb.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <img src={Logo} />
      </div>
    </nav>
  );
}

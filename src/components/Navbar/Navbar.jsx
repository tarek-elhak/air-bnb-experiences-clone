import "./Navbar.css"
import air_bnb from "../../assets/airbnb-logo.png"

export default function Navbar ()
{
    return (
      <nav className="nav__bar">
          <img src={air_bnb} alt="ari-bnb" className="logo__image"/>
      </nav>
    );
}
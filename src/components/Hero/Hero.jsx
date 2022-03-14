import img_group from "../../assets/group.png";
import "./Hero.css";


export default function Hero()
{
    return (
        <section>
            <img src={img_group} alt="group of experiences' images" className="image__group" />
            <h2 className="experiences__header">online experiences</h2>
            <p className="experiences__para">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}
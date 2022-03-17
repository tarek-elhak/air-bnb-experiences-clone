import "./ExperienceCard.css";

import star from "../../assets/Star.png"

export default function ExperienceCard(props)
{
    return(
        <div className="card">
            {props.badge && <div className="badge">{props.badge}</div>}
            <img src={props.img} alt="katie zaferes" className="experience__image"/>
            <div className="stats">
                <img src={star} alt="rating star" className="experience__states__image"/>
                <span className="rating">{props.rating}</span>
                <span className="total__reviews">({props.totalReview}).</span>
                <span className="location">{props.location}</span>
            </div>
            <p className="experience__title">
                {props.title}
            </p>
            <p className="experience__salary">
                <span className="bold">From {props.price}</span> / person
            </p>
        </div>
    );
}
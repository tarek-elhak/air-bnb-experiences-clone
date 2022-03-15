import "./ExperienceCard.css";

import star from "../../assets/Star.png"

export default function ExperienceCard(props)
{
    const {batch,img,rating,totalReview,location,price,title} = props.experience;

    return(
        <div className="card">
            {batch !== "" ? <div className="batch">{batch}</div> : ""}
            <img src={img} alt="katie zaferes" />
            <div className="stats">
                <img src={star} alt="rating star"/>
                <span className="rating">{rating}</span>
                <span className="total__reviews">({totalReview}).</span>
                <span className="location">{location}</span>
            </div>
            <p className="experience__title">
                {title}
            </p>
            <p className="experience__salary">
                <span className="bold">From {price}</span> / person
            </p>
        </div>
    );
}
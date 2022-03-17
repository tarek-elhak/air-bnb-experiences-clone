import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import {experiencesData} from "./experiencesData";
import "./App.css";




export default function App()
{
    let experiences = experiencesData.map(experience =>{
        return <ExperienceCard key={experience.id} {...experience} />
    });
    return (
        <>
            <Navbar />
            <Hero />
            <section className="experience__section">
                {experiences}
            </section>
        </>
    );
}


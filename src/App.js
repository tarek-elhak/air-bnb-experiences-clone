import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ImagesGroup from "./components/ImagesGroup/ImagesGroup";
import Experiences from "./components/Experiences/Experiences";

export default function App()
{
    return (
        <>
            <Navbar />
            <ImagesGroup />
            <Experiences />
        </>
    );
}
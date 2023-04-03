import planet from "../assets/planet.jpg";
import planet1 from "../assets/planet1.jpg";
import planet2 from "../assets/planet2.jpg";
import planet3 from "../assets/planet3.jpg";
import planet4 from "../assets/planet4.jpg";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet8 from "../assets/planet8.png";
import planet9 from "../assets/planet9.jpg";

const CardLoc = ({ location, handleInfoLoc }) => {
    const images = [
        planet,
        planet1,
        planet2,
        planet3,
        planet4,
        planet5,
        planet6,
        planet8,
        planet9,
    ];
    const { id, name, type } = location;
    
    return (
        <div data-id={id} className="cardLoc" onClick={handleInfoLoc}>
            <img
                src={images[Math.floor(Math.random() * images.length)]}
                alt="planetLoc"
            />
            <h2>{name}</h2>
            <p>{type}</p>
        </div>
    );
};

export default CardLoc;

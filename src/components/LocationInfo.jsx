import planet from "../assets/planet.jpg";
import planet1 from "../assets/planet1.jpg";
import planet2 from "../assets/planet2.jpg";
import planet3 from "../assets/planet3.jpg";
import planet4 from "../assets/planet4.jpg";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet8 from "../assets/planet8.png";
import planet9 from "../assets/planet9.jpg";

const LocationInfo = ({ location }) => {
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
    const { name, type, residents, dimension } = location;

    return (
        <div className="cardLocInfo">
            <div className="divImage">
                <img
                    src={images[Math.floor(Math.random() * images.length)]}
                    alt="planetLoc"
                />
            </div>
            <div className="divText">
                <h2>Name: {name}</h2>
                <p>Type: {type}</p>
                <p>Dimension: {dimension}</p>
                <p>Residents: {residents.length}</p>
            </div>
        </div>
    );
};

export default LocationInfo;

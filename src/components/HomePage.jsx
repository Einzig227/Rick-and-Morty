import { useState, useEffect } from "react";
import Button from "./Button";
import homeImage from "../assets/rick-and-morty-31013 (1).png";

const HomePage = ({ handleCharacters, handleLocation }) => {
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="homePage">
            <div>
                {showModal && (
                    <div className="modalContainer">
                        <div className="description">
                            <h2>Characters:</h2>
                            <h3>Show all the characters </h3>
                            <h2>Locations:</h2>
                            <h3>Display characters planets</h3>
                        </div>
                    </div>
                )}
                <div className="home">
                    <img
                        src={homeImage}
                        alt="character"
                        className="homeImage"
                    />
                    <Button
                        handleCharacters={handleCharacters}
                        handleLocation={handleLocation}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

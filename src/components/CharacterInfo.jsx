const CharacterInfo = ({ character }) => {
    const { image, name, species, gender, origin, status } = character;
    return (
        <div className="charInfo">
            <div className="divImage">
                <img src={image} alt={name} />{" "}
            </div>
            <div className="divText">
                <h3>Name: {name}</h3>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>Origin: {origin.name}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
};

export default CharacterInfo;

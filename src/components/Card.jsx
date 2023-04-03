const Card = ({ character, handleInfo }) => {
    const { id, name, image, species } = character;
    return (
        <div onClick={handleInfo} data-id={id} className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{species}</p>
        </div>
    );
};

export default Card;

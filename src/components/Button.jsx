const Button = ({ handleCharacters, handleLocation }) => (
    <div className="buttons">
        <button className="buttonsCha" onClick={handleCharacters}>
            Characters
        </button>
        <button className="buttonsLoc" onClick={handleLocation}>
            Locations
        </button>
    </div>
);

export default Button;

import "./styles.css";

const RandomPokemon = () => {
  let randInt = Math.floor(Math.random() * 151) + 1;
  let url;
  if (randInt < 10) {
    url = `https://projectpokemon.org/images/sprites-models/bdsp-sprites/00${randInt}.png`;
  } else if (randInt < 100) {
    url = `https://projectpokemon.org/images/sprites-models/bdsp-sprites/0${randInt}.png`;
  } else {
    url = `https://projectpokemon.org/images/sprites-models/bdsp-sprites/${randInt}.png`;
  }
  return (
    <div className="main">
      <h1>Pokemon # {randInt}</h1>
      <img src={url} alt="" />
    </div>
  );
};

export default RandomPokemon;

import { Link } from "react-router-dom";

function PlayerCard({ player }) {
  return (
    <Link to={`/player/${player.id}`}>
      <div className="card fade-in">
        <h2>{player.name}</h2>
        <p>{player.country}</p>
      </div>
    </Link>
  );
}

export default PlayerCard;
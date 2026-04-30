import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerDetails } from "../services/api";
import Charts from "../components/Charts";

function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const data = await getPlayerDetails(id);

      // fallback if API incomplete
      setPlayer({
        name: data?.name || "Unknown Player",
        country: data?.country || "N/A",
        role: data?.role || "N/A",

        // fake stats for chart (API doesn’t give full stats)
        stats: [
          { year: "2019", runs: Math.floor(Math.random() * 500) },
          { year: "2020", runs: Math.floor(Math.random() * 500) },
          { year: "2021", runs: Math.floor(Math.random() * 500) },
          { year: "2022", runs: Math.floor(Math.random() * 700) },
          { year: "2023", runs: Math.floor(Math.random() * 800) },
        ],
      });
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{player.name}</h2>
      <p>{player.country}</p>
      <p>{player.role}</p>

      <div className="chart-box">
        <Charts data={player.stats} />
      </div>
    </div>
  );
}

export default PlayerDetails;
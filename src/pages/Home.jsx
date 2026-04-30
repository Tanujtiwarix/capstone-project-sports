import { useEffect, useState } from "react";
import { searchPlayer } from "../services/api";
import useDebounce from "../hooks/useDebounce";
import PlayerCard from "../components/PlayerCard";

function Home() {
  const [query, setQuery] = useState("");
  const [players, setPlayers] = useState([]);

  const debounced = useDebounce(query);

  useEffect(() => {
    if (!debounced) return;

    const fetchData = async () => {
      const data = await searchPlayer(debounced);
      setPlayers(data);
    };

    fetchData();
  }, [debounced]);

  return (
    <div className="container">

      <input
        className="search"
        placeholder="Search player..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid">
        {players.map((p) => (
          <PlayerCard key={p.id} player={p} />
        ))}
      </div>

    </div>
  );
}

export default Home;
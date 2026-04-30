const API_KEY = "d356253b-f87f-4861-926a-f3a1b74294da";
// search players
export const searchPlayer = async (name) => {
  const res = await fetch(
    `https://api.cricapi.com/v1/players?apikey=${API_KEY}&search=${name}`
  );
  const data = await res.json();
  return data.data || [];
};

// get player details
export const getPlayerDetails = async (id) => {
  const res = await fetch(
    `https://api.cricapi.com/v1/players_info?apikey=${API_KEY}&id=${id}`
  );
  const data = await res.json();
  return data.data;
};
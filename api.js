const API_URL = "https://www.omdbapi.com/?apikey=d049b4a";

export function getMovie(query) {
  return fetch(`${API_URL}&t=${query}`)
    .then((res) => res.json())
    .catch(() => ({
      Response: "False",
      Error: "unexpected error",
    }));
}

const API_URL = "https://www.omdbapi.com/?apikey=d049b4a";

export const getMovie = async (query) => {
  try {
    const response = await fetch(`${API_URL}&t=${query}`);

    const data = await response.json();

    return data;
  } catch (error) {
    alert(error);
  }
};

import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Image, Input, Button, Avatar } from "@rneui/base";
import FindMovie from "../components/FindMovie";
import MovieList from "../components/MovieList";
import { ShowType, SortType } from "../types/type";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const addMovie = useCallback(
    (newMovie) => {
      if (movies.find((movie) => movie.imdbId === newMovie.imdbId)) {
        return;
      }

      if (newMovie.type === "movie") {
        const newMovieList = [...movies];

        setMovies([...newMovieList, newMovie]);
      } else {
        const newTvShowsList = [...tvShows];

        setTvShows([...newTvShowsList, newMovie]);
      }
    },
    [movies, tvShows]
  );

  const deleteMovie = useCallback(
    (showId, showType) => {
      if (showType === "movie") {
        const unDeletedMovies = movies.filter(
          (movie) => movie.imdbId !== showId
        );

        setMovies([...unDeletedMovies]);
      } else {
        const unDeletedTvShows = tvShows.filter(
          (tvShow) => tvShow.imdbId !== showId
        );

        setTvShows([...unDeletedTvShows]);
      }
    },
    [movies, tvShows]
  );

  const onRecentlyViewed = useCallback(
    (recentMovie) => {
      if (recentlyViewed.find((movie) => movie.imdbId === recentMovie.imdbId)) {
        return;
      }

      const newRecentlyViewedList = [...recentlyViewed];

      setRecentlyViewed([...newRecentlyViewedList, recentMovie]);
    },
    [recentlyViewed]
  );

  const sortShows = (type, shows) => {
    if (type === SortType.Year) {
      const newListbyYear = [...shows];

      newListbyYear.sort(
        (s1, s2) =>
          Number(s2.released.split(" ")[2]) - Number(s1.released.split(" ")[2])
      );

      return newListbyYear;
    }

    const newListbyAlphabet = [...shows];

    if (newListbyAlphabet.length > 1) {
      newListbyAlphabet.sort((s1, s2) => s1.title.localeCompare(s2.title));
    }

    return newListbyAlphabet;
  };

  const orderByYear = (type) => {
    if (type === ShowType.Movie) {
      const newListbyYear = sortShows(SortType.Year, movies);

      setMovies(newListbyYear);
      return;
    }

    const newListbyYear = sortShows(SortType.Year, tvShows);

    setTvShows(newListbyYear);
  };

  const orderByAlphabet = (type) => {
    if (type === ShowType.Movie) {
      const newListbyAlphabet = sortShows(SortType.Alphabet, movies);

      setMovies(newListbyAlphabet);
      return;
    }

    const newListbyAlphabet = sortShows(SortType.Alphabet, tvShows);

    setTvShows(newListbyAlphabet);
  };

  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.container}>
          <FindMovie onAdd={addMovie} />
          <View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Movies</Text>
            <View style={styles.orderContainer}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Order By:</Text>
              <View style={styles.buttonContainer}>
                <Button
                  title="Alphabetical"
                  onPress={() => orderByAlphabet(ShowType.Movie)}
                  color="#25D366"
                />
                <Button
                  style={{ marginLeft: 5 }}
                  title="Year"
                  onPress={() => orderByYear(ShowType.Movie)}
                  color="#25D366"
                />
              </View>
            </View>
            <MovieList
              movies={movies}
              navigation={navigation}
              deleteMovie={deleteMovie}
              onRecentlyViewed={onRecentlyViewed}
            />
          </View>
          <View style={styles.tvContainer}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Tv Shows</Text>
            <View style={styles.orderContainer}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Order By:</Text>
              <View style={styles.buttonContainer}>
                <Button
                  title="Alphabetical"
                  onPress={() => orderByAlphabet(ShowType.Tvshow)}
                  color="#25D366"
                />
                <Button
                  style={{ marginLeft: 5 }}
                  title="Year"
                  onPress={() => orderByYear(ShowType.Tvshow)}
                  color="#25D366"
                />
              </View>
            </View>
            <MovieList
              movies={tvShows}
              navigation={navigation}
              deleteMovie={deleteMovie}
              onRecentlyViewed={onRecentlyViewed}
            />
          </View>
          <View style={styles.tvContainer}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Recently Viewed:{" "}
            </Text>

            <MovieList
              movies={recentlyViewed}
              navigation={navigation}
              deleteMovie={deleteMovie}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  tvContainer: {
    marginTop: 20,
  },

  orderContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginBottom: 10,
  },
});

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { Image, Input, Button } from "@rneui/base";
import FindMovie from "../components/FindMovie";
import MovieList from "../components/MovieList";

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const addMovie = (newMovie) => {
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
  };

  const deleteMovie = (showId, showType) => {
    if (showType === "movie") {
      const unDeletedMovies = movies.filter((movie) => movie.imdbId !== showId);

      setMovies([...unDeletedMovies]);
    } else {
      const unDeletedTvShows = tvShows.filter(
        (tvShow) => tvShow.imdbId !== showId
      );

      setTvShows([...unDeletedTvShows]);
    }
  };

  const orderByYear = (shows) => {
    const newListbyYear = [...shows];

    newListbyYear.sort(
      (s1, s2) =>
        Number(s2.released.split(" ")[2]) - Number(s1.released.split(" ")[2])
    );

    console.log("====================================");
    console.log(newListbyYear);
    console.log("====================================");
  };

  const orderByAlphabet = (shows) => {
    const newListbyAlphabet = [...shows];

    if (newListbyAlphabet.length > 1) {
      newListbyAlphabet.sort((s1, s2) => s1.localeCompare(s2));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <FindMovie onAdd={addMovie} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Movies</Text>
          <View style={styles.orderContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Order By:</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Alphabetical"
                onPress={orderByAlphabet(movies)}
                color="#25D366"
              />
              <Button
                style={{ marginLeft: 10 }}
                title="Year"
                onPress={orderByYear(movies)}
                color="#25D366"
              />
            </View>
          </View>
          <MovieList
            movies={movies}
            navigation={navigation}
            deleteMovie={deleteMovie}
          />
        </View>
        <View style={styles.tvContainer}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Tv Shows</Text>
          <View style={styles.orderContainer}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Order By:</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Alphabetical"
                onPress={orderByAlphabet(movies)}
                color="#25D366"
              />
              <Button
                style={{ marginLeft: 10 }}
                title="Year"
                onPress={orderByYear(tvShows)}
                color="#25D366"
              />
            </View>
          </View>
          <MovieList
            movies={tvShows}
            navigation={navigation}
            deleteMovie={deleteMovie}
          />
        </View>
      </View>
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
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});

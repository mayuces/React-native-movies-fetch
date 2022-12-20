import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { getMovie } from "../api";

const FindMovie = ({ onAdd }) => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = (text) => {
    setQuery(text);
    setError("");
  };

  const onAddMovie = (newMovie) => {
    onAdd(newMovie);
    setQuery("");
    setMovie(null);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const data = await getMovie(query);

    setIsLoading(false);

    if ("Error" in data) {
      setError(data.Error);
    } else {
      const loadedMovie = {
        title: data.Title,
        description: data.Plot,
        imgUrl:
          data.Poster === "N/A"
            ? "https://via.placeholder.com/360x270.png?text=no%20preview"
            : data.Poster,
        imdbId: data.imdbID,
        imdbUrl: `https://www.imdb.com/title/${data.imdbID}`,
      };

      console.log(loadedMovie);
      setMovie(loadedMovie);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => handleQuery(text)}
          value={query}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <Button onPress={handleSubmit} title="Add to list" />

        {/* <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default FindMovie;

const styles = StyleSheet.create({});

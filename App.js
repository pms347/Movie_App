import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { MovieSearchBar } from "./App/Component/MovieSearchBar";
import { SuggestedCards } from "./App/Component/SuggestedCards";
import { Genres } from "./App/Component/Genres";
import { Crew } from "./App/Component/Crew";
import { SuggestedUsers } from "./App/Component/SuggestedUsers";
import { H1, H2, P } from "./App/Component/MovieText";


export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.container}>
          <MovieSearchBar />
          <H2>Suggested</H2>
          <SuggestedCards></SuggestedCards>
          <H2>Genres</H2>
          <Genres />
          <H2>Popular Persons</H2>
          <Crew />
          <H2>Who to follow</H2>
          <SuggestedUsers />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 12
  }
});

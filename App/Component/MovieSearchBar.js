import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export class MovieSearchBar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        containerStyle={{
          backgroundColor: 'white',
          borderColor: 'white',
          borderLeftColor: 'white',
          borderTopColor: 'white',
          borderBottomColor: 'white',
          borderWidth: 1,
          borderRadius: 10
        }}
        inputContainerStyle={{
          backgroundColor: '#F5F5F5',
          borderRadius: 10
        }}
        inputStyle={{
          fontSize: 15,
          fontWeight: "700",
          color: '#000000',
          opacity: 0.6
        }}
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

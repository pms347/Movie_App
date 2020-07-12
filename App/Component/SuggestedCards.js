import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { MovieCard } from "./MovieCard";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        poster_path: 'https://image.tmdb.org/t/p/w342/38PkhBGRQtmVx2drvPik3F42qHO.jpg',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        poster_path: 'https://image.tmdb.org/t/p/w342/dpF1Ck1UvpW0ItT1EoX0xNYEhS8.jpg',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        poster_path: 'https://image.tmdb.org/t/p/w342/1MzSD7XEHx2gAemTf0jpQOH8W9t.jpg',
    },
    {
        id: '1d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        poster_path: 'https://image.tmdb.org/t/p/w342/pRdN98AVlteI4aZAJsmjq4DGL18.jpg',
    },
    {
        id: '2ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        poster_path: 'https://image.tmdb.org/t/p/w342/mHkeMrAqW4TnRkeI1Xl8qwuGyPg.jpg',
    },
    {
        id: '38694a0f-3da1-471f-bd96-145571e29d72',
        poster_path: 'https://image.tmdb.org/t/p/w342/dppsLQ9aPxMXSJcJ6gOb0PFbyT7.jpg',
    },
];


export class SuggestedCards extends React.Component {

    render() {

        const { poster_path } = this.props;

        return (
            <View style={{paddingTop: 10,paddingBottom: 30}}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={({ item }) => <MovieCard poster_path={item.poster_path} />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
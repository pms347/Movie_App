import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { ImageButton } from "./ImageButton";

const DATA = [
    {
        id: '1',
        name: 'Comedy',
        icon: 'action',
        width: 120
    },
    {
        id: '2',
        name: 'Action',
        icon: 'action',
        width: 120
    },
    {
        id: '3',
        name: 'Adventure',
        icon: 'action',
        width: 130
    },
    {
        id: '4',
        name: 'Drama',
        icon: 'action',
        width: 120
    },
    {
        id: '5',
        name: 'Fantasy',
        icon: 'action',
        width: 130
    },
    {
        id: '6',
        name: 'Thriller',
        icon: 'action',
        width: 130
    },
    {
        id: '7',
        name: 'Documentary',
        icon: 'action',
        width: 150
    },
    {
        id: '8',
        name: 'Crime',
        icon: 'action',
        width: 120
    },
    {
        id: '9',
        name: 'Romance',
        icon: 'action',
        width: 130
    },
    {
        id: '10',
        name: 'Mystery',
        icon: 'action',
        width: 130
    },
    {
        id: '11',
        name: 'Horror',
        icon: 'action',
        width: 130
    },
    {
        id: '12',
        name: 'Science Fiction',
        icon: 'action',
        width: 160
    },
    {
        id: '13',
        name: 'Music',
        icon: 'action',
        width: 120
    },
    {
        id: '14',
        name: 'Animation',
        icon: 'action',
        width: 140
    },
    {
        id: '15',
        name: 'War',
        icon: 'action',
        width: 110
    },
    {
        id: '16',
        name: 'Family',
        icon: 'action',
        width: 120
    },
    {
        id: '17',
        name: 'History',
        icon: 'action',
        width: 130
    },
    {
        id: '18',
        name: 'Western',
        icon: 'action',
        width: 130
    },
    {
        id: '19',
        name: 'Muscial',
        icon: 'action',
        width: 130
    },
    {
        id: '20',
        name: 'Sport',
        icon: 'action',
        width: 130
    },
    {
        id: '21',
        name: 'Biography',
        icon: 'action',
        width: 150
    },
    {
        id: '22',
        name: 'Anime',
        icon: 'action',
        width: 120
    },
    {
        id: '23',
        name: 'Noir',
        icon: 'action',
        width: 120
    }
];


export class Genres extends React.Component {

    renderItem = ({ item, index }) => {
        if (index % 3 == 0 && index <= 20) {
            return (
                <View >
                    <ImageButton style={{ width: DATA[index].width }} name={DATA[index].name} icon={DATA[index].icon} />
                    <ImageButton style={{ width: DATA[index + 1].width }} name={DATA[index + 1].name} icon={DATA[index + 1].icon} />
                    <ImageButton style={{ width: DATA[index + 2].width }} name={DATA[index + 2].name} icon={DATA[index + 2].icon} />
                </View>
            );
        }
        return (
            <></>
        );
    }

    render() {

        return (
            <View style={{ paddingTop: 10, paddingBottom: 30 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}
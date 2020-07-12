import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { SuggestedUser } from "./SuggestedUser";

const DATA = [
    {
        id: '1',
        name: 'Leonardo'
    },
    {
        id: '2',
        name: 'Quentin'
    },
    {
        id: '3',
        name: 'Christoper Nolan'
    },
    {
        id: '4',
        name: 'Johnny Deep'
    },
    {
        id: '5',
        name: 'Jake'
    },
    {
        id: '6',
        name: 'Scarlett Johansson'
    },
    {
        id: '7',
        name: 'Will Smith'
    },
    {
        id: '8',
        name: 'Brad Pitt'
    },
    {
        id: '9',
        name: 'Guy Richie'
    },
    {
        id: '10',
        name: 'McConaughey'
    },
    {
        id: '11',
        name: 'Fincher'
    },
    {
        id: '12',
        name: 'Daniel Jacob'
    },
    {
        id: '13',
        name: 'Stephen King'
    },
    {
        id: '14',
        name: 'Rachel McAdams'
    },
    {
        id: '15',
        name: 'Reeves'
    },
    {
        id: '16',
        name: 'Anne Hathway'
    },
    {
        id: '17',
        name: 'Thomas Elms'
    },
    {
        id: '18',
        name: 'Tom Hanks'
    },
    {
        id: '19',
        name: 'Muscial'
    },
    {
        id: '20',
        name: 'Jessica'
    },
    {
        id: '21',
        name: 'Biography'
    },
    {
        id: '22',
        name: 'Downey Jr'
    },
    {
        id: '23',
        name: 'Margot Ro'
    }
];


export class SuggestedUsers extends React.Component {

    renderItem = ({ item, index }) => {
        if (index % 3 == 0 && index <= 20) {
            return (
                <View >
                    <SuggestedUser  name={DATA[index].name} icon={DATA[index].icon} />
                    <SuggestedUser  name={DATA[index + 1].name} icon={DATA[index + 1].icon} />
                    <SuggestedUser  name={DATA[index + 2].name} icon={DATA[index + 2].icon} />
                </View>
            );
        }
        return (
            <></>
        );
    }

    render() {

        return (
            <View style={{ paddingTop: 10, paddingBottom: 10 }}>
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
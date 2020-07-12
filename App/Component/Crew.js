import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';


const DATA = [
    {
        id: '88747',
        profile_path: 'https://image.tmdb.org/t/p/w154/fAb4GhSdmrYPnI5Pfmp4N9itUCa.jpg',
    },
    {
        id: '78747',
        profile_path: 'https://image.tmdb.org/t/p/w154/anbOMr8XeoshB2wrqxaHl9PqWDH.jpg',
    },
    {
        id: '550172',
        profile_path: 'https://image.tmdb.org/t/p/w154/mst9LXlBKRypz3zdO3Vn8tQYRSd.jpg',
    },
    {
        id: '12345',
        profile_path: 'https://image.tmdb.org/t/p/w154/vfGx5lIbhp9s8hWUnqsGlR9aVLu.jpg',
    },
    {
        id: '12346',
        profile_path: 'https://image.tmdb.org/t/p/w154/qflsUL9W14PBTFUwrNwSyzoTz7Z.jpg',
    },
    {
        id: '12347',
        profile_path: 'https://image.tmdb.org/t/p/w154/os83niBx24U9AkntAy62hycne4n.jpg',
    },
    {
        id: '12348',
        profile_path: 'https://image.tmdb.org/t/p/w154/lSLF837hWXPWAvMAmO157113r4j.jpg',
    },
    {
        id: '12349',
        profile_path: 'https://image.tmdb.org/t/p/w154/t6niRFC3xCV6hJSuyC9ACWLSVXu.jpg',
    },
    {
        id: '12350',
        profile_path: 'https://image.tmdb.org/t/p/w154/D87nTUHqaiURQMfPNMiFrA7ZRz.jpg',
    },
    {
        id: '12351',
        profile_path: 'https://image.tmdb.org/t/p/w154/f9F456K0ydJCIIUS5YSmQWAgEgI.jpg',
    },
];


export class Crew extends React.Component {

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity >
                <Avatar
                    rounded
                    source={{
                        uri: item.profile_path,
                    }}
                    size="large"
                    title="CR"
                    activeOpacity={0.7}
                    iconStyle={{ tintColor: 'gray' }}
                    onPress={() => console.log("Works!")}
                    containerStyle={{flex: 2, marginLeft: 20}}
                />
                <Text style={styles.avatarTitle}>Anurag Kashyap</Text>
            </TouchableOpacity>
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

const styles = StyleSheet.create({
    avatarTitle: {
        marginBottom: 4,
        fontSize: 15,
        fontWeight: "700",
        color: '#000000',
        opacity:0.6,
        flexWrap: 'wrap', 
        marginLeft: 30, 
        marginTop:10, 
        width: 70
    },
});

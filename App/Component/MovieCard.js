import React from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const screen = Dimensions.get("window");
const CARD_WIDTH = Math.floor(screen.width * 0.50);
const CARD_HEIGHT = Math.floor(CARD_WIDTH * (323 / 222));

// Style object used for styling component
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 5,
        borderRadius: 3
    },
    cardImage: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderColor: "#fff",
        borderRadius: 13,
    }
});


export class MovieCard extends React.Component {

    render() {

        const { poster_path } = this.props;

        return (
            <TouchableOpacity>
                <View style={[styles.card]}>
                    <Image
                        source={{ uri: poster_path }}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
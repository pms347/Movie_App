import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export class ImageButton extends React.Component {

    render() {

        const { name, icon, style } = this.props;
        return (
            <TouchableOpacity style={[ styles.button, style ]} activeOpacity={0.5}>
                <Image
                    source={require(`../../assets/action.png`)}
                    style={styles.imageIconStyle}
                    resizeMode="contain"
                />
                <Text style={styles.textStyle}>{name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'flex-start',
        height: 40,
        margin:5,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#F5F5F5',
        borderColor: "#F5F5F5",
        width: 120
    },
    imageIconStyle: {
        padding: 10,
        margin: 10,
        height: 15,
        width: 15,
        resizeMode: 'contain',

    },
    textStyle: {
        marginBottom: 4,
        fontSize: 15,
        fontWeight: "700",
        color: '#000000',
        opacity:0.6
    },
});

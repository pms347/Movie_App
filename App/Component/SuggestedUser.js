import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

export class SuggestedUser extends React.Component {

    render() {
        const { name, icon, style } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.profileContainer} activeOpacity={0.5}>
                    <Avatar
                        rounded
                        source={{
                            uri: 'https://media.mustapp.me/must/account/photo/w64/5ab1a56f-fb40-4fcc-b1dc-fa8e0c37e67f.jpg',
                        }}
                        size="medium"
                        title="CR"
                        activeOpacity={0.7}
                        onPress={() => console.log("Works!")}
                        containerStyle={{ marginRight: 10 }}
                    />
                    <Text style={styles.textStyle}>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.5}>
                    <Icon style={{ justifyContent: 'flex-end' }}
                        name='ios-add-circle'
                        type='ionicon'
                        color='#007AFF'
                        solid={true}
                        size={35}
                    />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginRight: 15,
        justifyContent: 'space-between'
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        opacity: 0.6,
        marginRight: 10
    },
});

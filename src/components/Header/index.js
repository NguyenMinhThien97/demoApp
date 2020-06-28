import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
export default class Header extends Component {
    render() {
        return (
            <View style = { styles.container}>
                <View style = { styles.left } >
                        <Text>Thien</Text>
                    </View>
                    <View style = { styles.right } >
                    <Image source={require('./img/open-menu.png')}/>
                        </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width,
        height: 100,
      },
    left: {
        flexDirection: 'row-reverse',
        backgroundColor: 'powderblue',
        flex: 5
    },
    right: {
        flexDirection: 'row-reverse',
        flex: 5,
        backgroundColor: 'blue',
    },
});
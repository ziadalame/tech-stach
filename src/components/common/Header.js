// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textSyles}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, heigh: 2 },
        shadowOpacity: 0.2,
        position: 'relative',
        elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
};

// make available
export { Header };

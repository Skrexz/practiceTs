import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


interface Props {
    title: string,
    onPress: () => void
}
export const Fab = ({title, onPress}: Props) => {

    
    return (
        
            <TouchableOpacity
            style={styles.fabLocationBL}
            onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        
    )
}

const styles  = StyleSheet.create ({
    fabLocationBL: {
        position: 'absolute',
        bottom: 10,
        right: 0

    },

    fab: {
        backgroundColor: '#5856D6',
          width: 60,
          height: 60,
          borderRadius:100,
          justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    }
})
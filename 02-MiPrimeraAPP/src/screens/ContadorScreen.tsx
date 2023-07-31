import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from 'react';
import { Fab } from "../components/Fab";
export const ContadorScreen = () =>{

   const [contador, setcontador] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>

            <Fab 
                title='+1'
                onPress={() => setcontador(contador + 1)}
            />
            {/*<TouchableOpacity
            style={styles.fabLocationBL}
            onPress={() => setcontador(contador + 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>*/}

            <TouchableOpacity
            style={styles.fabLocationLeft}
            onPress={() => setcontador(contador - 1)}
            >
                <View style={styles.fableft}>
                    <Text style={styles.fabTextleft}>-1</Text>
                </View>
            </TouchableOpacity>
        </View>
        

        

    )
}

const styles = StyleSheet.create ({
    container: { flex:1,
        justifyContent: 'center'
        //backgroundColor: 'blue'}
    },

    title: { 
    textAlign: 'center',
    fontSize: 40,
    top: -15
    },

    fabLocationBL: {
        position: 'absolute',
        bottom: 10,
        right: 0

    },

    fab: {backgroundColor: '#5856D6',
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
        
    },
    fabLocationLeft: {
        position: 'absolute',
        bottom: 10,
        left: 0

    },

    fableft: {backgroundColor: '#5856D6',
          width: 60,
          height: 60,
          borderRadius:100,
          justifyContent: 'center'
    },
    fabTextleft: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    },
    color : {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'gray'
    }
})


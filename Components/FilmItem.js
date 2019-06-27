import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'

export default class FilmItem extends React.Component {
    render(){
        return(
            <View
           // style={[styles.main_container, {height: 10}]}>
            style={styles.main_container}>
            
            <View style={styles.image_container}>
            </View>

            <Image
            style={styles.item_image}
            source={require('../assets/new_logo_lba.png')}
            />

            <View
            style={styles.second_container}>
            
            <View
            style={styles.title_container}>
            <Text
            style={styles.title_text}>Titre du film  </Text>
            
            <Text
            style={styles.title_text}>Vote</Text>

            </View>

            <Text
            style={styles.title_text}>
            Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…     
            
            </Text>
            
            <Text
            style={styles.title_text}>Sorti le</Text>

            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 3,
        height: 190,
        flex: 1,
        flexDirection: 'row'
    },
    second_container: {
        flex: 2,
        padding: 10
    },
    image_container: {
    },
    title_container: {
        flex: 1,
        flexDirection: 'row'
    },
    title_text: {
        justifyContent: 'flex-end'
    },
    item_image: {
        width: 190,
        height: 190,
        flex: 1

    }
})
import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

export default function Search() {
    return (

        <View
        style={{marginTop: 20}}>
        
        <TextInput
        style={styles.textStyle}
        
        placeholder="Titre du film"/>
        
        <Button
        style={{
            height: 50,
            marginTop: 20}}
        title="Rechercher"
        onPress={() => {}} />
        
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem/>}
        />
        </View>
    );
  }


  const styles = StyleSheet.create({

    main_container: {
        marginTop: 20,
        flex: 1
    },
    textStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        height: 50,
        borderColor: 'blue',
        borderWidth: 1,
        paddingLeft: 5
    }
  })
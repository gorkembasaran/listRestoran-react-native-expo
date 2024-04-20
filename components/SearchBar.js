import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ term,onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>  
      <AntDesign style={styles.iconStyle} name="search1" size={24} color="black" />
      <TextInput 
      placeholder='Ara'
      autoCorrect={false}
      autoCapitalize='none'
      style={styles.inputStyle}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit} 
      value={term}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle : {
        backgroundColor : 'lightgray',
        flexDirection : 'row',
        margin : 10,
        height : 50,
        alignItems : 'center',
        borderRadius : 20,
    },
    iconStyle : {
        marginHorizontal : 15,
        fontSize : 30,
    },
    inputStyle : {
        flex : 1,
        fontSize : 18,
    }

})
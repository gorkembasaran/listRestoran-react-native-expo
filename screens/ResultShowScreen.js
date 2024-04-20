import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultShowScreen({route}) {
    const [result, setResult] = useState(null)
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id)
    },[id]);
    if(!result){
        return null;
    }
  return (
    <View>
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.phone}>{result.phone}</Text>
        <FlatList 
        data={result.photos} 
        renderItem={({ item })=> {
            return (
                <Image style={styles.image} source={{ uri: item }} />
            ) 
        }}
        />
        <View style={styles.icon}>
            {
            result.is_closed ? <AntDesign name="closecircleo" size={24} color="black" /> : 
            <MaterialIcons name="delivery-dining" size={24} color="black" />
            }
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    image : {
        height : 150,
        width : 150,
        alignSelf : 'center'
    },
    title: {
        alignSelf : 'center',
        fontSize : 25,
        marginVertical : 10,
    },
    phone : {
        alignSelf : 'center',
        fontSize : 20,
    },
    icon : {
        alignSelf : 'center',
        marginVertical : 10,
    }

})
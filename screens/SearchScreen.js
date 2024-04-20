import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

export default function SearchScreen() {
    const [searchApi, result, errorMessage] = useResults()
    const [term, setTerm] = useState('')
    const filterResultsByPrice = (price) => {
        return result.filter((obj)=> {
            return obj.price === price
        })
    }
  return (
    <View>
        <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {
            result.length == 0 ? <></> : <>
                <ResultList title="Uygun Restoranlar" results={filterResultsByPrice('₺')} />
        <ResultList title="Ortalama Restoranlar" results={filterResultsByPrice('₺₺')} />
        <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
        <ResultList title="Çok Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺₺')} />
            </>
        }
    </View>
  )
}

const styles = StyleSheet.create({})
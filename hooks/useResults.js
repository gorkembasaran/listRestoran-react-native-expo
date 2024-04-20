import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ()=>{
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMesage] = useState("")
    const searhApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit : 50,
                    term: searchTerm,
                    location : 'Istanbul',
                }
            });
            setResult(response.data.businesses)
            setErrorMesage("")
        } catch (error) {
            setErrorMesage("Bağlantı Hatası")
        }
    }

    useEffect(()=>{
        searhApi("Toast");
    },[])

    return [searhApi, result]
}
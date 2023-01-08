import React, { useEffect,useState } from "react";

const API_KEY =  process.env.REACT_APP_GIPHY_API


const useFetch = ({keyword}) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
            const { data } = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url)
        } catch (error) {
            setGifUrl(`https://api.giphy.com/v1/gifs/search?api=${API_KEY}&q=error&limit=1`)
            console.log("Error: ", `${keyword} not found`)  
        }
    }


    useEffect(() => {
        if(keyword) fetchGifs()
    }, [keyword]);


    return gifUrl
}

export default useFetch;
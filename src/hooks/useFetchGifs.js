import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//un HOOK no es mas que una funcion que regresa algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [] ) //[] dispara solo una vez lo que hay en el useEfect


  return {
    images: images,
    isLoading: isLoading
  }
}

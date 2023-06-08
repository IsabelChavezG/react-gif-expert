
//useEffect: Hook para disparar efectos secundarios

import { useEffect,useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";




export const GifGrid = ({ category }) => {
 
    //creacion de un HOOK personalizado
    const { images, isLoading } = useFetchGifs( category )

  return (
    <>
        <h3>{ category }</h3>
        {
            // isLoading
            // ? ( <h2>Cargando...</h2> )
            // :null

            //si isLoading es true ejecuta..
            isLoading && ( <h2>Cargando...</h2> )
        }


        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image } 
                     />
                ))
            }
        </div>
    </>
  )
}

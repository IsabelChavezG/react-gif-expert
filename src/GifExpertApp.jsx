//importacion del HOOK useState
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

//functional component rafc
export const GifExpertApp = () => {
    //necesitamos un hook para mantener el estado de la app
    //useStateSnippet, espacio de memoria para las categorias
    const [categories, setCategories] = useState(['One Punch']); //[] inicializar el arreglo con un valor

    

    //funcion que añade categorias
    const onAddCategory = (newCategory) => {
        //si la categoria ya existe, no agregarla
        if(categories.includes(newCategory) ) return;

        console.log(newCategory);
       //console.log('Valorant');
       setCategories([newCategory, ...categories]);
       //setcategories( cat => [ ...cat, 'Valorant']);

    }

  return (
    <>
        {/* ---1. Titulo--- */}
        <h1>GifExpertApp</h1>

        {/* ---2. Input--- */}
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ event => onAddCategory(event)}
            
        />
        

        {/* --- 3. Listado de Gif--- */}

        {/* Renderizar el listado, basado en las categorias */}

        {
            categories.map ( ( category ) => (
                <GifGrid 
                key={ category }
                category={ category } />
            ))
        }
        
            {/* Gif Item */}
    </>
  )
}

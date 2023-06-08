import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
      //console.log(event);
      event.preventDefault();
      //console.log(inputValue);
      if( inputValue.trim().length <= 1) return;

      //setCategories(categories => [inputValue, ...categories ]);
      onNewCategory( inputValue.trim() );
      setInputValue(''); 
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      {/* <form onSubmit={ onSubmit }>  ES LO MISMO*/}

      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />

    </form>
    
  )
}

import { FormEvent, useState } from 'react';

interface AddCategoryProp {
  onNewCategory?: ( value: string ) => void;
  onDeleteCategory?: ( value: string ) => void;
}
export const AddCategory: React.FC<AddCategoryProp> = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('Naruto');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // to prevent to add empty values on the box text
    const cleanValue = inputValue.trim();
    if (cleanValue.length <= 1) return;
    if (onNewCategory) {
      onNewCategory(cleanValue);
    }
    setInputValue('');
  }

  return (
    <form onSubmit={ (e) => onSubmit(e) }>
      <input
        id="setCat"
        type="text"
        placeholder="Search gifts"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>

  )
}

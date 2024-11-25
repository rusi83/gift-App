import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


export const GiftExpertApp: React.FC = () => {
  const [categories, setCategories] = useState(['Demon Slayer']);

  const onAddCategory = ( newCategory: string ) => {
    const lowerCaseCategories = categories.map( cat => cat.toLowerCase());
    const lowerCaseNewCategories = newCategory.toLowerCase();
    if (lowerCaseCategories.includes(lowerCaseNewCategories)) return;
    setCategories( cat => [newCategory, ...cat]);
  }

  const onDeleteCategory = ( catToDelete: string ) => {
    const lowerCaseCategories = categories.map( cat => cat.toLowerCase());
    const lowerCaseDeleteCategories = catToDelete.toLowerCase();
    if ( lowerCaseCategories.includes(lowerCaseDeleteCategories) ) {
      setCategories( categories.filter( cat => cat !== catToDelete))
    }
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ value => onAddCategory(value) }
      />

      {categories.map(category => (
        <GiftGrid
          key={category}
          category={category}
          onDeleteCategory={onDeleteCategory}
        />
      ))}
    </>
  );
}

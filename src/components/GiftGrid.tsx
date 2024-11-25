import { GiftItem } from './GiftItem';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { LoadingComponent } from './LoadingComponent';

interface GiftGridProps {
  category: string;
  onDeleteCategory: ( value: string ) => void;
}

export const GiftGrid: React.FC<GiftGridProps> = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifts( category )


  const renderGiftItems = () => {
    return images.map( img =>(
      <GiftItem key={img.id} {...img} />
    ))
  }

  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    right: '50px',
  }

  const catToDelete = () => {
    onDeleteCategory(category);
  }

  return (
    <>
      <h3>{category}</h3>
      <LoadingComponent isLoading={isLoading}/>
      <div className="card-grid">
        {renderGiftItems()}
        <button
          style={ buttonStyle }
          onClick={catToDelete}
        >
          delete
        </button>
      </div>
    </>
  )
}

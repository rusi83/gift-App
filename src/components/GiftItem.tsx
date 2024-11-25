
interface GiftItemProps {
  title: string;
  url: string;
}
export const GiftItem:React.FC<GiftItemProps> = ( {title, url} ) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

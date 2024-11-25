
interface GiftData {
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

export const getGift = async ( category: string ) => {
  const apiKey = import.meta.env.VITE_API_KEY_GIPHY;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } : { data: GiftData[]} = await resp.json();
  console.log('data', data);
  const gifts = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
  }));
  return gifts;
}

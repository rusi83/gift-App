import { useState, useEffect } from 'react';
import { getGift } from "../helpers"

interface fetchedGift {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifts = (category: string) => {

  const [Images, setImages] = useState<fetchedGift[]>([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async (category: string) => {
    const newImages: fetchedGift[] = await getGift(category)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    getImages(category);
  }, [category]);

  return {
    images: [...Images],
    isLoading,
  }
}

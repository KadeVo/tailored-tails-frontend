import { useState, useEffect } from 'react'
import { useGetAllProductsQuery } from '../features/productsApi'
import { ItemInterface } from '../interfaces/iteminterface'
import Loading from './Loading'

const Carousel: React.FC = () => {
  const { data: items, error, isLoading } = useGetAllProductsQuery({})
  const [visibleImages, setVisibleImages] = useState<ItemInterface[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (items) {
      setVisibleImages(items.slice(0, 4))
    }
  }, [items])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (items?.length - 3 || 0))
    }, 2500)

    return () => {
      clearInterval(timer)
    }
  }, [currentIndex, items])

  useEffect(() => {
    if (items) {
      setVisibleImages(items.slice(currentIndex, currentIndex + 4))
    }
  }, [currentIndex, items])

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (items?.length || 0)) % (items?.length - 3 || 0)
    )
  }

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (items?.length - 3 || 0))
  }

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    console.error('Error fetching items:', error)
  }

  return (
    <div className="w-full h-80 md:h-80 overflow-hidden relative">
      <div className="flex transition-transform duration-500 ease-in-out">
        {visibleImages.map((image) => (
          <img
            key={image._id}
            src={image.imageUrl}
            alt={image.name}
            className="w-full h-80 object-cover object-center ml-2 mr-2 transition-transform duration-500 ease-in-out"
          />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
        <button
          onClick={handlePrevClick}
          className="bg-gray-400  hover:bg-gray-700 text-white font-bold py-2 px-2 md:px-4 rounded"
        >
          ◀
        </button>
        <button
          onClick={handleNextClick}
          className="bg-gray-400  hover:bg-gray-700 text-white font-bold py-2 px-2 md:px-4 rounded"
        >
          ▶
        </button>
      </div>
    </div>
  )
}

export default Carousel

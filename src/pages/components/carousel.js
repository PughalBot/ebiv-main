import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Carousel() {
  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/981618787491127306/1088448785442668644/error-404-12.jpg',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/981618787491127306/1088448785690136656/x1sr1lob3ai41.jpg',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/981618787491127306/1088448785006465054/70369302-error-wallpapers.jpeg',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/981618787491127306/1088448784800940113/1a97eb3af4813ac9f856b11fd19f7c76.jpg',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/750752324712136828/1078910557727502346/pexels-photo-3839432.png',
    },
    {
      url: 'https://cdn.discordapp.com/attachments/750752324712136828/1078910290470637638/pexels-photo-3755706.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='h-screen w-auto ml-6 mt-24 mr-6 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-[20px] bg-cover duration-500'
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-[#A215A5] cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-[#A215A5] cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center -mt-10'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-white'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import banner1 from "../../assets/banner/banner-1.png";
import banner2 from "../../assets/banner/banner-2.png";
import banner3 from "../../assets/banner/banner-3.png";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedBanner } from "../../redux/slices/BannerSlice";

function Carousel() {
  const bannerState = useSelector((state) => state.bannerSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUploadedBanner());
  }, []);

  // const slides = [
  //   {
  //     url: banner1,
  //   },
  //   {
  //     url: banner2,
  //   },
  //   {
  //     url: banner3,
  //   },

  //   {
  //     url: banner2,
  //   },
  //   // {
  //   //   url: banner3,
  //   // },
  // ];
  const slides = bannerState.bannerImages.map((bs) => {
    return {
      url: bs.image,
    };
  });

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

  return slides.length > 0 ? (
    <div className="max-w-[1400px]  h-[780px] w-full m-auto   px-4 relative bottom-16 group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="carousel__Block"
      ></div>
      {/* Left Arrow */}
      <div className="carousel__Arrow--Left">
        <BsFillArrowLeftCircleFill onClick={prevSlide} size={50} />
      </div>
      {/* Right Arrow */}
      <div className="carousel__Arrow--Right">
        <BsFillArrowRightCircleFill onClick={nextSlide} size={50} />
      </div>
      <div className="carousel__Img--Block">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="carousel__Img--CurrentIndex"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Carousel;

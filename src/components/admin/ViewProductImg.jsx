import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedImage } from "../../redux/slices/ImageSlice";

const ViewProductImg = ({ prodImage }) => {
  const dispatch = useDispatch();

  const [activeImage, setActiveImage] = useState([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    dispatch(getUploadedImage());
  }, []);

  useEffect(() => {
    if (prodImage?.images.length > 0) {
      setActiveImage(prodImage.images);
      setActive(prodImage.images[0]);
    }
  }, [prodImage]);

  const handleImageClick = (e) => {
    const imageUrl = e.target.getAttribute("value");
    setActive(imageUrl);
  };

  return (
    <>
      <div className="grid gap-4">
        {!prodImage ? (
          <p>Loading...</p>
        ) : (
          <div>
            <img className="h-auto max-w-full rounded-lg" src={active} alt="" />
          </div>
        )}
        <div className="grid grid-cols-5 gap-4">
          {activeImage?.map((image, index) => (
            <div key={index}>
              <img
                onClick={handleImageClick}
                className="h-auto max-w-full rounded-lg"
                src={image}
                value={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewProductImg;

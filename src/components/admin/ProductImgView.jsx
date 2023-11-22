import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUploadedImage } from "../../redux/slices/ImageSlice";

const ProductImgView = () => {
  const dispatch = useDispatch();

  const imageData = useSelector((state) => state.uploadImageSlice);
  const { loading, uploadedImages, error } = imageData;

  const [activeImage, setActiveImage] = useState([]);
  const [active, setActive] = useState("");

  // console.log("uploadedImages", uploadedImages);

  useEffect(() => {
    dispatch(getUploadedImage());
  }, []);

  useEffect(() => {
    if (uploadedImages.length > 0) {
      const firstItem = uploadedImages[0];
      setActiveImage(firstItem.images);
      setActive(firstItem.images[0]);
    }
  }, [uploadedImages]);

  const handleImageClick = (e) => {
    const imageUrl = e.target.getAttribute("value");
    setActive(imageUrl);
  };

  const handleName = (selectedItemId) => {
    const selectedItem = uploadedImages.find(
      (item) => item._id === selectedItemId
    );

    if (selectedItem) {
      setActiveImage(selectedItem.images);
      setActive(selectedItem.images[0]);
    }
  };

  return (
    <>
      <div className="grid gap-4">
        <select onChange={(e) => handleName(e.target.value)}>
          {uploadedImages.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        {loading ? (
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

export default ProductImgView;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const SwiperSlider = (projectsData) => {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
            {projectsData.images?.map((image) => (
                <SwiperSlide key={image.imgAlt}>
                    <img src={image.imgUrl} alt={projectsData.title + " - " + image.imgAlt}/>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    );
};

export default SwiperSlider;
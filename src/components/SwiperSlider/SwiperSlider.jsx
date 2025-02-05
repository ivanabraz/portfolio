import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { v4 as uuidv4 } from "uuid";

const SwiperSlider = (projectsData) => {
    const imagePath = `/images/projects/${projectsData.id}/`;

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
                {projectsData.images?.flatMap((media) => 
                    media.type === "nested"
                        ? media.nestedImages.map((nestedMedia) => nestedMedia)
                        : [media]
                ).map((media) => (
                    <SwiperSlide key={uuidv4()} className="bg-white dark:bg-black">
                        {media.type === "image" ? (
                            <img src={imagePath + media.imgUrl} alt={projectsData.title + " - " + media.imgAlt} loading="lazy"/>
                        ) : media.type === "video" ? (
                            <video autoPlay loop muted playsInline width="100%" key={uuidv4()}>
                                <source src={imagePath + media.imgUrl} type="video/mp4" />
                                Tu navegador no soporta el tag de video.
                            </video>
                        ) : null}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperSlider;

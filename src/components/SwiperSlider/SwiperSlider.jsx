import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { v4 as uuidv4 } from "uuid";

const SwiperSlider = (projectsData) => {
    const imagePath = `${process.env.PUBLIC_URL}/images/projects/${projectsData.id}/`;

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
                {projectsData.images?.map((media, index) => (
                    <SwiperSlide key={uuidv4()} className="bg-white dark:bg-black">
                        {media.type === "nested" ? (
                            <Swiper slidesPerView={1} spaceBetween={0} className="nested-swiper">
                                {media.nestedImages.map((nestedMedia, nestedIndex) => (
                                    <SwiperSlide key={uuidv4()}>
                                        {nestedMedia.type === "image" ? (
                                            <img src={imagePath + nestedMedia.imgUrl} alt={projectsData.title + " - " + nestedMedia.imgAlt} />
                                        ) : nestedMedia.type === "video" ? (
                                            <video autoPlay loop muted playsInline width="100%" key={uuidv4()}>
                                                <source src={imagePath + nestedMedia.imgUrl} type="video/mp4" />
                                                Tu navegador no soporta el tag de video.
                                            </video>
                                        ) : null}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <>
                                {media.type === "image" ? (
                                    <img src={imagePath + media.imgUrl} alt={projectsData.title + " - " + media.imgAlt} />
                                ) : media.type === "video" ? (
                                    <video autoPlay loop muted playsInline width="100%" key={uuidv4()}>
                                        <source src={imagePath + media.imgUrl} type="video/mp4" />
                                        Tu navegador no soporta el tag de video.
                                    </video>
                                ) : null}
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SwiperSlider;

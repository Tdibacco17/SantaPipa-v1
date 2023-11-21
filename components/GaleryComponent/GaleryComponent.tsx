'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import './GaleryStyles.css';
import { FreeMode, Thumbs } from 'swiper/modules';
import { ImgDataInterface } from '@/types';
import GaleryCardComponent from '../GaleryCardComponent/GaleryCardComponent';
export default function GaleryComponent({
    imagesData
}: {
    imagesData: ImgDataInterface[] | undefined
}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<null>(null);

    const handleSwiper = (swiper: any) => {
        setThumbsSwiper(swiper);
    };

    return (
        <>
            <Swiper
                loop
                spaceBetween={0}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                {
                    imagesData ?
                        imagesData.map((imageData: ImgDataInterface, index: number) => {
                            return <SwiperSlide key={index}>
                                <GaleryCardComponent imageData={imageData} imgType="primary" />
                            </SwiperSlide>
                        })
                        : <>cargando</>
                }
            </Swiper>
            <Swiper
                onSwiper={handleSwiper}
                loop={true}
                spaceBetween={16}//16px = 1rem
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper"
            >
                {
                    imagesData ?
                        imagesData.map((imageData: ImgDataInterface, index: number) => {
                            return <SwiperSlide key={index}>
                                <GaleryCardComponent imageData={imageData} imgType="secondary" />
                            </SwiperSlide>
                        })
                        : <>cargando</>
                }
            </Swiper>
        </>
    );
}

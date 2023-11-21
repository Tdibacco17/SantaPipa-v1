'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './GaleryStyles.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ImgDataInterface } from '@/types';
import GaleryCardComponent from '../GaleryCardComponent/GaleryCardComponent';
export default function GaleryComponent({
    imagesData
}: {
    imagesData: ImgDataInterface[]
}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <>
            <Swiper
                loop
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Navigation, Thumbs]}
                className="first-img-galery"
            >
                {imagesData.map((imageData: ImgDataInterface, index: number) => {
                    return <SwiperSlide key={index}>
                        <GaleryCardComponent imageData={imageData} imgType="primary" />
                    </SwiperSlide>
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={16}//16px = 1rem
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="second-img-galery"
            >
                {imagesData.map((imageData: ImgDataInterface, index: number) => {
                    return <SwiperSlide key={index}>
                        <GaleryCardComponent imageData={imageData} imgType="secondary" />
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}

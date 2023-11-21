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
    imagesData: ImgDataInterface[] | undefined
}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<null>(null);

    const handleSwiper = (swiper: any) => {
        setThumbsSwiper(swiper);
    };

    return (
        <>
            {imagesData &&
                <>
                    <Swiper
                        loop
                        spaceBetween={0}
                        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="first-img-galery"
                    >
                        {imagesData.map((imageData: ImgDataInterface, index: number) => {
                            return <SwiperSlide key={index}>
                                <GaleryCardComponent imageData={imageData} imgType="primary" />
                            </SwiperSlide>
                        })}
                    </Swiper>
                    <Swiper
                        onSwiper={handleSwiper}
                        spaceBetween={16}//16px = 1rem
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="second-img-galery"
                    >
                        {imagesData.map((imageData: ImgDataInterface, index: number) => {
                            return <SwiperSlide key={index}>
                                <GaleryCardComponent imageData={imageData} imgType="secondary" />
                            </SwiperSlide>
                        })}
                    </Swiper>
                </>
            }
        </>
    );
}

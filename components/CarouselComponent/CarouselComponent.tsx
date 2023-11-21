'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CarouselStyles.css';
import { ProductInterface } from '@/types/productsType';
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent';

export default function CarouselComponent({
    productData
}: {
    productData: ProductInterface[]
}) {
    return (
        <Swiper
            zoom={{ toggle: false }}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            className="carousel-swiper"
        >
            {productData && productData.map((proudcData: ProductInterface, index: number) => {
                return <SwiperSlide key={index}>
                    <ProductCardComponent productData={proudcData} />
                </SwiperSlide>
            })}
        </Swiper>
    );
}

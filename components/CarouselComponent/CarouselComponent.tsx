'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CarouselStyles.css';
import { ProductInterface } from '@/types/productsType';

export default function CarouselComponent({
    productData
}: {
    productData: ProductInterface[]
}) {
    return (
        <section className="container-section-carousel">
            <div className="wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {productData && productData.map((imageData: ProductInterface, index: number) => {
                        return <SwiperSlide key={index}>

                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </section>
    );
}

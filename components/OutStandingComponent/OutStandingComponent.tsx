import CarouselComponent from '../CarouselComponent/CarouselComponent'
import styles from './OutStandingComponent.module.scss'
import productsData from '@/models/products'
import { ProductInterface } from '@/types/productsType'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
export default function OutStandingComponent() {
    return (
        <section className={styles["container-section-OutStanding"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["container-carousel-desktop"]}>
                    {Object.values(productsData).slice(3, 6).map((productData: ProductInterface, index: number) => {
                        return <ProductCardComponent key={index} productData={productData} />
                    })}
                </div>
                <div className={styles["container-carousel-mobile"]}>
                    <CarouselComponent productData={Object.values(productsData).slice(3, 6)} />
                </div>
            </div>
        </section>
    )
}